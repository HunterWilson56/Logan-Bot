const Discord = require('discord.js');
const superagent = require('superagent');
module.exports.run = async (client, message, args) => {
console.log(`${message.author.tag} used the l.botavatar command!`);

const botavatar = message.content.split(' ').slice(1).join(' ');
var request = require("request").defaults({ "encoding" : null });

if (message.author.id == "338192747754160138") {
request(botavatar, function (err, res, body) {
if (!err && res.statusCode === 200) {
var data = "data:" + res.headers["content-type"] + ";base64," + new Buffer(body).toString("base64");
client.user.setAvatar(botavatar).catch((error) => { message.channel.send('Beep boop, something went wrong. Check the console to see the error.'); console.log('Error on setavatar command:', error); });

message.channel.send('Done. :ok_hand:');
}
})

} else {
    message.delete();
    message.channel.send(`\`📛\` You don't have permissions to execute that command.`);
}
}