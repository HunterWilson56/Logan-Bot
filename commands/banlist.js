const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {


    let ban = await message.guild.fetchBans().catch(error => { 
        return message.channel.send('Sorry, I don\'t have the proper permissions to view bans!');
    });
  
    ban = ban.array();
  let users = message.guild.fetchBans().id;
  //t admins = message.guild.channels.find("name", "mod-log")

    ban.push(ban, 'size', { reverse: false });

    let possiblebans = [['User', 'ID']];
    ban.forEach(function(ban) {
        possiblebans.push([ban.username, ban.id]);
    })

    const embed = new Discord.RichEmbed()
    .setTitle(`**BANS**`)
        .setColor(0xCB5A5E)
        .addField('Banned Info', `\`\`\`${possiblebans.shift(4)}\`\`\``)
        .addField('Bans', `\`\`\`${possiblebans.slice()}\`\`\``);
  message.channel.send(embed);
}

module.exports.help = {
  name: "banlistq"
}