
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let msg =  bot.guilds.map(guild => `${guild.name} Owner: ${guild.owner.user.username} Members: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle("Servers")
  .setDescription('Servers im in')
  .addField(msg)
  .setColor("#551a8b");
  message.channel.send(embed);
}

module.exports.help = {
  name: "servers"
}
