
   const Discord = require('discord.js');
   const settings = require("../settings.json");
   module.exports.run = async (bot, message, args) => {
       const logsCommands = bot.channels.get(settings.humanChannelid);
    logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}web command!`);
    message.channel.send({embed:{

"title": "Logans Website Info",
"color": 16253959,
"description": "Look At Our Cool Website! [Go Here](https://loganbot.xyz/) ",
"timestamp": new Date(),
"footer": {
  "icon_url": "https://cdn.discordapp.com/attachments/398489037431898113/411628424646623242/8b3b31dd-0db9-4183-b656-e0d1989164e4.jpg",
  "text": "© Logan 2018",
}
    }})
}