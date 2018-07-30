
const Discord = require('discord.js');
const settings = require("../settings.json");
module.exports.run = async (bot, message, args) => {
 

var coin = Math.floor((Math.random() * 2) + 1);
if (coin == 1) {
    message.channel.send("Heads")
} else message.channel.send("Tails")
}