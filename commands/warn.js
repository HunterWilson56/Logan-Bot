const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  message.delete();

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("<:tickNo:432418492667396097> **| You don't have `KICK_MEMBERS` permissions.");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Couldn't find the user.");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setTitle("Warn")
  .setColor("#fc6400")
  .addField("User", `${wUser.user.username}`)
  .addField("Moderator", `${message.author.username}`)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Reason", reason);

  let warnchannel = message.guild.channels.find(`name`, "mod-log");
  if(!warnchannel) return message.channel.send("<:tickNo:432418492667396097> **| Couldn't find `mod-log` channel**");
  warnchannel.send(warnEmbed);
  message.channel.send("<:tickYes:432418492889694210> **| That user has been warned.**");

  
}

module.exports.help = {
  name: "warn"
}