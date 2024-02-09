import type { MessageOptions } from 'vscode'
import { window, workspace } from 'vscode'
import { isEqual } from 'lodash-es'
import type { RoutineInfo } from './types'
import { parseIntervalToMs } from './utils'

interface PoolImpl {
  stop: () => void
  recover: () => void
}

interface PoolProps {
  routines: RoutineInfo[]
}

interface TaskInfo {
  name: string
  ops: MessageOptions
  ms: number
  once?: boolean
}

export class Pool implements PoolImpl {
  public static from(cfg: PoolProps) {
    const instance = new Pool(cfg)
    return instance
  }

  private _routines: RoutineInfo[]
  private tasks: NodeJS.Timeout[]

  private constructor(cfg: PoolProps) {
    const { routines } = cfg
    this._routines = routines
    this.tasks = this._routines.map(routineInfo => this.composeRemindTask(routineInfo)).filter(Boolean) as NodeJS.Timeout[]
  }

  private parseRoutineInfo(info: RoutineInfo) {
    const { interval, name, description, silent } = info
    const ms = parseIntervalToMs(interval)
    if (ms <= 0)
      return
    const ops: MessageOptions = { modal: !silent }
    if (description)
      Object.assign(ops, { detail: description } as MessageOptions)
    return {
      name,
      ops,
      ms,
    } as TaskInfo
  }

  private dispatchTask(task: TaskInfo) {
    const { name, ops, ms, once } = task
    const id = setTimeout(() => {
      window.showInformationMessage(name, ops, 'OK', 'Stop reminding me in the rest time')
        .then((val) => {
          clearTimeout(id)
          this.tasks.splice(
            this.tasks.indexOf(id),
            1,
          )
          if (val !== 'Stop reminding me in the rest time' && !once) {
            const taskId = this.dispatchTask(task)
            if (taskId)
              this.tasks.push(taskId)
          }
        })
    }, ms)
    if (!once)
      return id
  }

  private composeRemindTask(info: RoutineInfo) {
    const taskInfo = this.parseRoutineInfo(info)
    if (!taskInfo)
      return
    return this.dispatchTask(taskInfo)
  }

  stop() {
    this.tasks.forEach(id => clearTimeout(id))
  }

  recover() {
    const userConfig = workspace.getConfiguration('reminder').get<RoutineInfo[]>('routine', [])
    if (!isEqual(
      this._routines,
      userConfig,
    ))
      this._routines = userConfig

    this.tasks = this._routines.map(routineInfo => this.composeRemindTask(routineInfo)).filter(Boolean) as NodeJS.Timeout[]
  }

  dispose() {
    this.tasks.forEach(id => clearTimeout(id))
  }

  addRemindTask(task: TaskInfo) {
    this.dispatchTask(task)
  }
}
