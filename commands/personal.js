const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {  
message.react('⏳')
  message.reply('This command is in BETA')
    message.guild.createRole({
      name: (message.author.username), 
      color: 'BLUE',
    })
      .then(role => console.log(`Created new role with name ${role.name} and color ${role.color}`))
      .catch(console.error)
      const memberrole = message.guild.roles.find(message.author.username).id
      message.guild.createChannel('new-category', 'category', [{
        id: memberrole,
        deny: ['MANAGE_MESSAGES', 'SEND_MESSAGES', 'READ_MESSAGES'],
        allow: ['CREATE_INSTANT_INVITE']
      }])
        .then(console.log)
        .catch(console.error);
}