
  const Discord = require('discord.js');
  const settings = require("../settings.json");
  module.exports.run = async (bot, message, args) => {
let guild = message.guild;
let large = message.guild.large ? "✅" : "❎";
let icon = message.guild.iconURL;

let createdAtRaw = guild.createdAt.toDateString();
let createdAt = createdAtRaw.split(" ");

let textChannels = 0;
let voiceChannels = 0;
guild.channels.forEach(channel => {
channel.type === "text" ? textChannels++ : voiceChannels++;
});

let emojis = [];
guild.emojis.forEach(emoji => {
emojis.push(`\`${emoji.name}\``);
});
emojis.length === 0 ? emojis = "None" : emojis = emojis.join(", ");

let roles = [];
guild.roles.forEach(role => {
  roles.push(`\`${role.name}\``);
});
roles = roles.join(", ");

let embed = new Discord.RichEmbed()
.setTitle(`Information about ${message.guild.name}`)
.setColor("RANDOM")
.setThumbnail(icon)
.addField('Guild Name', guild.name, true)
.addField('Guild ID', guild.id, true)
.addField('Guild Owner', guild.owner, true)
.addField('Created At', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
.addField('Server Region', guild.region.toUpperCase(), true)
.addField('Total Members:', guild.memberCount, true)
.addField('Large', large, true)
.addField('Verification Level', guild.verificationLevel, true)
.addField('Text Channels', textChannels, true)
.addField('Voice Channels', voiceChannels, true)
.addField('Roles', `${guild.roles.size}`, true)
.addField('Emojis', `${guild.emojis.size}`, true)


return message.channel.send(embed);
}