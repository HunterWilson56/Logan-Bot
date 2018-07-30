   const Discord = require('discord.js');
   const settings = require("../settings.json");
   module.exports.run = async (bot, message, args) => {
       const logsCommands = bot.channels.get(settings.humanChannelid);
message.channel.send({embed:{

"title": "To Vote For Logan",
"description": "To Vote For Logan So We Can Grow! go [here](https://discordbots.org/bot/408070424484904960) ",
"color": 16253959,
"timestamp": new Date(),
"footer": {
"icon_url": "https://cdn.discordapp.com/attachments/398489037431898113/411628424646623242/8b3b31dd-0db9-4183-b656-e0d1989164e4.jpg",
"text": "© Logan 2018",
}
}})
}