
   const Discord = require('discord.js');
   const settings = require("../settings.json");
   module.exports.run = async (bot, message, args) => {
       const logsCommands = bot.channels.get(settings.humanChannelid);
   
    message.channel.send({embed:{

"title": "Logans Website Info",
"color": 16253959,
"description": "Look At Our Cool Website! [Go Here our glitch](https://loganweb.glitch.me/) \n The Bot Lists i'm on [plexi bots](https://bots.plexidev.org/bot?408070424484904960) || [DBL](https://discordbots.org/bot/408070424484904960)  ",
"timestamp": new Date(),
"footer": {
  "icon_url": "https://cdn.discordapp.com/attachments/398489037431898113/411628424646623242/8b3b31dd-0db9-4183-b656-e0d1989164e4.jpg",
  "text": "© Logan 2018",
}
    }})
}