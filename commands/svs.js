const Discord = require('discord.js');
const settings = require("../settings.json");
module.exports.run = async (bot, message, args) => {
  let servs =  bot.guilds.map(g=>g.name).join('\n')
  const steamEmbed = new Discord.RichEmbed()
              .setTitle("servers")
              .setColor(0x9900FF)
           
            
              .setTimestamp()
              .addField("Servers",`bot.guilds.map(g=>g.name).join('\n')`)
              
            message.channel.send({
              embed: steamEmbed})

}