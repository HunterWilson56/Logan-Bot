const Discord = require('discord.js');
const config = require('../config.json');


module.exports.run = async (client, message, args) => {

  if (message.author.id !== `${config.ownerid}`) 

  if (message.author.id == `${config.ownerid}`){
    let embed = new Discord.RichEmbed()
    .setTitle(`It's time for Logan to go!!!`)
    .setColor(config.red)
    .setDescription('Leaving Guild...')
    message.channel.send(embed);

    message.guild.leave();
    return
  }
};

module.exports.help = {
  name: 'terminate',
  description: 'Will make the bot leave the guild and terminate it\'s instance.',
  usage: 'terminate'
};