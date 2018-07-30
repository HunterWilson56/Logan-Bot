
const Discord = require('discord.js');
const settings = require("../settings.json");
module.exports.run = async (bot, message, args) => {
    const logsCommands = bot.channels.get(settings.humanChannelid);

message.channel.send({embed:{

"title": "This Is The Change & Update Logs",
"description": "3/2.2018-Added Moderation For Inapropirte Words \n |End Of Log|",
"color": 3658691,
"timestamp": new Date(),
"footer": {
"icon_url": "https://cdn.discordapp.com/attachments/398489037431898113/411628424646623242/8b3b31dd-0db9-4183-b656-e0d1989164e4.jpg",
"text": "© Logan 2018",
}
}})
}