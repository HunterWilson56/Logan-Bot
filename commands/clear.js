const Discord = require('discord.js');
const superagent = require('superagent');
module.exports.run = async (client, message, args) => {            
if (!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.reply(':lock: **You** need `MANAGE_MESSAGES` permissions to execute `clear`');
            if (!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.reply(':lock: **I** need `MANAGE_MESSAGES` Permissions to execute `clear`');
            const firstUserClear = message.mentions.users.first();
            const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])
            if (!amount) return message.reply('Must specify an amount to delete!');
            if (!amount && !firstUserClear) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');
            message.channel.fetchMessages({
                limit: amount,
            }).then((messages) => {
                if (firstUserClear) {
                    const filterBy = firstUserClear ? firstUserClear.id : client.user.id;
                    messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                }
                message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
            })
}