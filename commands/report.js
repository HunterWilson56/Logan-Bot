const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
if(!rUser) return message.channel.send("could not find the user!");
let reason = args.join(" ").slice(22);

let reportEmbed = new Discord.RichEmbed()
.setDescription("reports")
.setColor("#9B59B6")
.addField("Reported By",`<@${message.author.id}> with ID ${message.author.id}`)
.addField("Reason", reason)
.addField("Reported User", `${rUser} with ID: ${rUser.id}`);

let incidentchannel = message.guild.channels.find(`name`, "mod-log");
if(!incidentchannel) return message.channel.send("Can't find `mod-log` channel.");

incidentchannel.send(reportEmbed);
}