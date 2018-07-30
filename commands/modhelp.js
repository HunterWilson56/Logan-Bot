const Discord = require('discord.js'); 

const settings = require('../settings.json');
module.exports.run = async (client, message, args) => {
console.log(`${message.author.tag} used the ${settings.botPREFIX}modhelp command!`);

message.reply("Please check your direct messages :inbox_tray: (Moderation commands.)");

message.author.send({embed: {
    color: 3447003,
    author: {
      name: 'Logan',
      icon_url: 'https://cdn.discordapp.com/avatars/408070424484904960/c49029118a89ea6717482e541c68051b.png?size=2048'
    },
    title: "Bot's commands",
    fields: [{
        name: "Moderation commands",
        value: `**${settings.botPREFIX}ban** - Bans a user from your server! (Moderators only!)\n\
**${settings.botPREFIX}kick** - Kicks a user out of the server! (Mederation only!)\n\
**${settings.botPREFIX}mute** - Muted a user with a **muted** role! (Moderation only!)\n\
**${settings.botPREFIX}lockdown** - Lock Downs a channel \n\
**${settings.botPREFIX}unban** - Unban a user \n\
**${settings.botPREFIX}clear - Clear an certain user's messages \n\
**${settings.botPREFIX}**banlist - shown ban list \n\
**${settings.botPREFIX}unmute** - Unmutes a user and removes the **muted** role. (Moderation only!)\n\
**${settings.botPREFIX}softban** - Kicks a user and deletes his messages. (Moderation only!)`
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: 'https://cdn.discordapp.com/avatars/408070424484904960/c49029118a89ea6717482e541c68051b.png?size=2048',
      text: "© Logan 2018"
    }
  }
})
}