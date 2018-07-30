const Discord = require('discord.js');
const config = require('../config.json');
const ms = require('ms');

const settings = require('../settings.json')

module.exports.run = async (client, message, args) => {
console.log(`${message.author.tag} used the l.ownerhelp command!`);

if (message.author.id == '338192747754160138') {
    message.reply("Please check your direct messages :inbox_tray: (Owner commands.)");

    message.author.send({embed: {
        color: 3447003,
        author: {
          name: "Logan",
          icon_url: "https://cdn.discordapp.com/avatars/408070424484904960/98c6fd4f4b3067165e18595155000c50.png?size=2048"
        },
        title: "Bot's commands",
        fields: [{
            name: "Bot's owner commands",
            value: `**${settings.botPREFIX}botname** - Changes the bot's username. **Usage: ${settings.botPREFIX}botname [NAME]**\n\
**${settings.botPREFIX}botavatar** - Changes the bot's avatar. **Usage: ${settings.botPREFIX}botavatar [LINK]**\n\
**${settings.botPREFIX}botnick** - Changed the nickname in a server. **Usage: ${settings.botPREFIX}botnick [NICKNAME]**\n\
**${settings.botPREFIX}eval** - Evaluates a code. **Usage: ${settings.botPREFIX}eval [CODE]**\n\
**${settings.botPREFIX}shutdown** - Closes the CMD window!\n\
**${settings.botPREFIX}terminate** - Makes Your bot leave a server \n\
**${settings.botPREFIX}say** - Give the bot something to say!`
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: "https://cdn.discordapp.com/avatars/408070424484904960/98c6fd4f4b3067165e18595155000c50.png?size=2048",
          text: "© Logan "
        }
      }
    });
} else {
    message.delete();
    message.channel.send(`\`📛\` Only the owner of the bot can use this command.`);
}
}