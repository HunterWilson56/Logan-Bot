
   const Discord = require('discord.js');
   const settings = require("../settings.json");
   module.exports.run = async (bot, message, args) => {
       const logsCommands = bot.channels.get(settings.humanChannelid);
logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}suggest command!`);
message.channel.send({embed:{

    "title": "To Suggest Stuff Fo Logan",
    "description": " [Click Here To Suggest](https://discord.gg/qQZa7ah)",
    "color": 2268623,
}})
}