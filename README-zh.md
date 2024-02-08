<br>

<p align="center">
<img src="https://raw.githubusercontent.com/GODLiangCY/reminder/main/reminder.png" style="width:100px;" height="128" />
</p>

<h1 align="center">Simple Reminder</h1>

<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=younggglcy.simple-routine-reminder" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/younggglcy.simple-routine-reminder.svg?color=eee&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a>
</p>
<p align="center">
<a href="https://github.com/GODLiangCY/reminder/blob/main/README.md">English</a>
|
<a href="https://github.com/GODLiangCY/reminder/blob/main/README-zh.md">中文</a>
</p>

## 关于

提醒你一些事情

如果你的 `settings.json` 像下面这样

```json
{
  "reminder.routine": [
    {
      "name": "Drink Water!",
      "interval": "15min",
      "description": "Drink 100ml of water"
    }
  ]
}
```

那么每隔 15 分钟，你会收到如下提醒

![](https://raw.githubusercontent.com/GODLiangCY/reminder/main/preview.png)

## 配置

设置一些简单的配置后,你就能按自己所需使用 Reminder

请参考 [types.ts](./src/types.ts)

## 命令

Reminder 也为你提供了一些命令,像停止或者恢复 Reminder 之类. 你可以随意探索

## 致谢

+ 感谢 [flaticon.com](https://www.flaticon.com/free-icon/reminder_1886913?term=reminder&page=1&position=31&page=1&position=31&related_id=1886913&origin=tag) 提供此 icon

## License

MIT License &copy; 2022-PRESENT [Young Liang](https://github.com/GODLiangCY)
