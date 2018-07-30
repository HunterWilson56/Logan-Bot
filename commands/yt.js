 const Discord = require('discord.js');
   const settings = require("../settings.json");
   module.exports.run = async (bot, message, args) => {
       const logsCommands = bot.channels.get(settings.humanChannelid);
   
 
         message.channel.send('This command will provide YouTube Commands |``l.YTC``|');
    }