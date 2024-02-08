<br>

<p align="center">
<img src="https://raw.githubusercontent.com/GODLiangCY/reminder/main/reminder.png" style="width:100px;" height="128" />
</p>

<h1 align="center">Simple Reminder</h1>

<p align="center">
<a href="https://marketplace.visualstudio.com/items?itemName=younggglcy.simple-routine-reminder" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/younggglcy.simple-routine-reminder.svg?color=eee&amp;label=VS%20Code%20Marketplace&logo=visual-studio-code" alt="Visual Studio Marketplace Version" /></a></p>

<p align="center">
<a href="https://github.com/GODLiangCY/reminder/blob/main/README.md">English</a>
|
<a href="https://github.com/GODLiangCY/reminder/blob/main/README-zh.md">中文</a>
</p>

## About

remind you about some routines.

If you have a `settings.json` like

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

And for every 15 minutes, you'll have a notification as below

![](https://raw.githubusercontent.com/GODLiangCY/reminder/main/preview.png)

## Config

After setting up some simple configurations, you can start using Reminder as you see fit.

Please refer to [types.ts](./src/types.ts) under /src floder for more details.

## Command

Reminder also provides some simple commands for you, like stop or recover Reminder and so on. Feel free to explore it.

## Credits

+ Thanks to [flaticon.com](https://www.flaticon.com/free-icon/reminder_1886913?term=reminder&page=1&position=31&page=1&position=31&related_id=1886913&origin=tag) for providing this icon.

## License

MIT License &copy; 2022-PRESENT [Young Liang](https://github.com/GODLiangCY)
