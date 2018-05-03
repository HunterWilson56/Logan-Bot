
const Discord = require('discord.js');
const settings = require("../settings.json");
module.exports.run = async (bot, message, args) => {
    const logsCommands = bot.channels.get(settings.humanChannelid);
logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}flip command!`);
var coin = Math.floor((Math.random() * 2) + 1);
if (coin == 1) {
    message.channel.send("Heads")
} else message.channel.send("Tails")
}