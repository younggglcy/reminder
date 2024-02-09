import { hrToMs, intervalRe, minToMs, secToMs } from './constants'
import { logger } from './log'

export function parseIntervalToMs(val: string | number) {
  if (typeof val === 'number')
    return minToMs * val

  const defaultValue = 0
  try {
    const matches = val.match(intervalRe)
    if (!matches)
      return defaultValue
    const value = Number(matches[1])
    const suffix = matches[2].trim()
    if (!suffix)
      return value * minToMs

    switch (suffix) {
      case 'ms':
        return value
      case 's':
      case 'sec':
      case 'secs':
        return value * secToMs
      case 'm':
      case 'mins':
      case 'min':
        return value * minToMs
      case 'h':
      case 'hr':
      case 'hrs':
        return value * hrToMs
      default:
        return defaultValue
    }
  }
  catch (err) {
    logger.appendLine(`The interval value is not valid, ${(err as Error).message}`)
    return defaultValue
  }
}
