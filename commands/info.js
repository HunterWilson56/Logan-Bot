const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

let botembed = new Discord.RichEmbed()
.setDescription("Info & Stats")
.addField("Info","UnderConstruction!")


return message.channel.send(botembed);
}