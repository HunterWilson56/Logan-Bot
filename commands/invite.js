
const Discord = require('discord.js');
const settings = require("../settings.json");
module.exports.run = async (bot, message, args) => {
    const logsCommands = bot.channels.get(settings.humanChannelid);
logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}invite command!`);
message.channel.send({embed:{

    "title": "To Add Logan To Your Discord",
    "description": " [Click Here To Add](https://discordapp.com/oauth2/authorize?client_id=%20408070424484904960&scope=bot&permissions=2102525183)",
    "color": 2268623,
}})

}