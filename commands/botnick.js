const Discord = require('discord.js');
const superagent = require('superagent');
module.exports.run = async (client, message, args) => {
console.log(`${message.author.tag} used the l.botnick command!`);

const botnickname = message.content.split(' ').slice(1).join(' ');

if (message.author.id == "338192747754160138"){
    message.guild.members.get(client.user.id).setNickname(botnickname);
    message.channel.send('Done. :ok_hand:');
} else {
    message.delete();
    message.channel.send(`\`📛\` You don't have permissions to execute that command.`);
}
}