
const Discord = require('discord.js');
const settings = require("../settings.json");
module.exports.run = async (bot, message, args) => {
    const logsCommands = bot.channels.get(settings.humanChannelid);
logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}hi command!`);
message.channel.send('Hello **Human**');
}




