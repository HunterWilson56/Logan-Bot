
const Discord = require('discord.js');
const settings = require("../settings.json");
module.exports.run = async (bot, message, args) => {
    


message.react('☑');
message.channel.send({embed:{

"title": "Help!",
"description": "Hello Thank you for activating my help proticall\n (My Prefix is a lowercase l and a . `l.`) \n |if your wondering about Commands do `l.Commands`{The C is Capital!}|\n for other things join our support server >https://discord.gg/qQZa7ah or \n Contact Tea Cup#3343 \n If you make an channel named `audit-log` i will show message deletes & channel updates! \n  **Also For My Auto Welcome You Need To Make an channel named welcome and when ever someone joins i will welcome them!** ",
"color": 1476585,
"timestamp": new Date(),
"footer": {
"icon_url": "https://cdn.discordapp.com/attachments/398489037431898113/411628424646623242/8b3b31dd-0db9-4183-b656-e0d1989164e4.jpg",
"text": "© Logan 2018",
}
}})
}
