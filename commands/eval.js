const Discord = require("discord.js");
const hastebin = require('hastebin-gen');

module.exports.run = async (client, message, args) => {
 let embed = new Discord.RichEmbed()
  .setTitle("Evaluation")
  .setDescription("Sorry, the `eval` command can only be executed by the Developer.")
  .setColor("#cdf785");
  if(message.author.id !== '338192747754160138') return message.channel.send(embed);
  
  function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}try {
      const code = args.join(" ");
      let evaled = eval(code);
      let rawEvaled = evaled;
      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

  let embed = new Discord.RichEmbed()
      .setTitle(`Evaluated in ${Math.round(client.ping)}ms`)
      .addField(":inbox_tray: Input", `\`\`\`js\n${code}\n\`\`\``)
      .addField(":outbox_tray: Output", `\`\`\`js\n${clean(evaled).replace(client.token, "Are you retarded?")}\n\`\`\``)
      .addField('Type', `\`\`\`xl\n${(typeof rawEvaled).substr(0, 1).toUpperCase() + (typeof rawEvaled).substr(1)}\n\`\`\``)
      .setColor('GREEN');
      message.channel.send({embed});
    } catch (err) {
      
      message.channel.send(`\`ERROR\` \`\`\`js\n${clean(err)}\n\`\`\``);
    }
}

module.exports.help = {
  name: "eval"
}