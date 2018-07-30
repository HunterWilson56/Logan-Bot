const Discord = require('discord.js');
const superagent = require('superagent');
module.exports.run = async (client, message, args) => {
console.log(`${message.author.tag} used the l.botname command!`);

const botusername = message.content.split(' ').slice(1).join(' ');

if (message.author.id == '338192747754160138') {
    client.user.setUsername(botusername);
    message.reply('Done. :ok_hand:');
} else {
    message.delete();
    message.channel.send(`\`📛\` You don't have permissions to execute that command.`);
}
}