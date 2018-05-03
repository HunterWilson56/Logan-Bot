

   const Discord = require('discord.js');
   const settings = require("../settings.json");
   module.exports.run = async (bot, message, args) => {
       const logsCommands = bot.channels.get(settings.humanChannelid);
ogsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}YTC command!`);
message.channel.send({embed:{

    "title": "This command Will link you to Hunters Youtube",
    "description": "Youtube Channel https://www.youtube.com/channel/UC3b0KGYwku_iJ7_DREyPz9w",
    "color": 12406360,
}})

}