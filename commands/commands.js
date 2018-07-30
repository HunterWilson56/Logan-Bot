
const Discord = require('discord.js'); 
 

module.exports.run = async (client, message, args) => {
 
 
  let botembed = new Discord.RichEmbed()
.setColor("482f95")
.setDescription("Commands")
.addField("Main Commands",'Main Commands \n |`l.hi`|`l.invite`|`l.info`|\n|`l.help`|`l.yt`|`l.games`|\n |`l.suggest`|`l.ping`|`l.afk`|`l.web`|`l.vote`|`l.stats`|\n |`l.log`|`l.roll`|`l.autow`|`l.8ball`|`l.weather`|`l.serverinfo`|\n |`l.botinfo`|`l.userinfo`|`l.uptime`|`l.softban`|`l.ownerhelp`|`l.mute`| \n |`l.report`| \n|`l.translate`|`l.todolist`|`l.request`|`l.donate`|`l.issues`|`l.poll`|\n |`l.warnlvl`|`l.quiz`| `l.dmteacup`|\n|`l.avatar`|`l.lockdown`|`l.mcstats`| \n |`l.unmute`|`l.avatar`|`l.svs`|\n `l.steam`|`l.csgo`|More Coming')
.addField("Developer Only",'l.ownerhelp')

.addField("Moderation",'l.modhelp');

 message.channel.send(botembed);
}