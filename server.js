
const Discord = require("discord.js");
const client = new Discord.Client();
const weather = require('weather-js');
const mentionHook = new Discord.WebhookClient("428273869359546369", "Huj8BVYOEec4ZRttJ2vuCTSJuyB_3UcCcaLkIzyOithSkSaqCKbF0KiK36MIaNLYLGV2");
const moment = require("moment");
const config = require("./config.json");
const settings = require("./settings.json");
const help = require("./botconfig.json");

const fs = require("fs");
const pm2 = require("pm2")
const chalk = require('chalk');
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
require('./util/eventLoader.js')(client);

const consoleLogger = require('consoled');
const consoled = new consoleLogger.Console({catchErrors: true}); // Change 'catchErrors' to false to disable auto-error-catching.
 
//Console.log
consoled.log('MESSAGE');
/*Result (Color is grey)
[3/6/2018 | 22:30:20]  MESSAGE
*/
 
//Console.error
consoled.error('MESSAGE');
/*Result (Color is red)
[3/6/2018 | 22:30:20]  Error: MESSAGE
*/
 
 
//Console.warn
consoled.warn('MESSAGE');
/*Result (Color is yellow)
[3/6/2018 | 22:30:20]  Warn: MESSAGE
*/
 
 
//Console.info
consoled.info('MESSAGE');
/*Result (Color is bright blue)
[3/6/2018 | 22:30:20]  Info: MESSAGE
*/
 
 
//Console.dir
consoled.dir('MESSAGE');
/*Result (Color is blue)
[3/6/2018 | 22:30:20]  'test'
*/
 
 
//Console.success
consoled.success('MESSAGE');
/*Result (Color is green)
[3/6/2018 | 22:30:20]  Success: MESSAGE
*/

var embed = new Discord.RichEmbed();
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });


//const Manager = new Discord.ShardingManager('./index.js');
//Manager.spawn(2); 
//Configuration


const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwODA3MDQyNDQ4NDkwNDk2MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTIyNDU3MTkzfQ.jzvqvJ-xtxkZ8eoNkmrn5V_PaP4A5DqQxk7pcKSsbgA', client);
client.on('ready', () => {
    setInterval(() => {
        dbl.postStats(client.guilds.size);
    }, 1800000);
});

client.on("ready", function() {
    var clientonmessage = `
------------------------------------------------------
> Logging in...
------------------------------------------------------
Logged in as ${client.user.tag}
Working on ${client.guilds.size} servers!
${client.channels.size} channels and ${client.users.size} users cached!
I am logged in and ready to roll!
LET'S GO!
------------------------------------------------------
----------Bot created by Tea Cup#3433-----------
------------------------------------------------------
-----------------Bot's commands logs------------------`

consoled.info(clientonmessage);

client.user.setPresence({ game: { name: `With ${client.users.size} friends`, url: 'https://twitch.tv/xxwilsongamingxx', type: 1 } });
    });

//l.help | on ${client.guilds.size} servers|Vrs;1.6.2
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
/*client.on("message", message => {
  const args = message.content.split(" ").slice(1);

  if (message.content.startsWith(config.prefix + "eval")) {
    if(message.author.id !== config.ownerID) return;
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
  }
});*/

client.on("message", async message => {
    if (message.author.equals(client.user)) return;

    if (!message.content.startsWith("l.")) return;

    //Disables commands in a private chat
    if  (message.channel.type == "dm") return console.log(`${message.author.tag} tried to use a command in DM!`);

    //Users blacklist
    if (message.author.id == "") return console.log(`[BlackList] ${message.author.tag} tried to use a command!`);

    //Channels blacklist
    if (message.channel.id == "") return;

    //Servers blacklist
    if (message.guild.id == "") return;

    var args = message.content.substring(settings.botPREFIX.length).split(" ");
    // Bot's commands from here.
    switch (args[0]) {
        case "uptime":
        console.log(`${message.author.tag} used the ${settings.botPREFIX}uptime command!`);

        let ms = client.uptime;
        let cd = 24 * 60 * 60 * 1000; // Calc days
        let ch = 60 * 60 * 1000; // Calc hours
        let cm = 60 * 1000; // Calc minutes
        let cs = 1000; // Calc seconds
        let days = Math.floor(ms / cd);
        let dms = days * cd; // Days, in ms
        let hours = Math.floor((ms - dms) / ch);
        let hms = hours * ch; // Hours, in ms
        let minutes = Math.floor((ms - dms - hms) / cm);
        let mms = minutes * cm; // Minutes, in ms
        let seconds = Math.round((ms - dms - hms - mms) / cs);
        if (seconds === 60) {
            minutes++; // Increase by 1
            seconds = 0;
        }
        if (minutes === 60) {
            hours++; // Inc by 1
            minutes = 0;
        }
        if (hours === 24) {
            days++; // Increase by 1
            hours = 0;
        }
        let dateStrings = [];

        if (days === 1) {
            dateStrings.push('**1** day');
        } else if (days > 1) {
            dateStrings.push('**' + String(days) + '** days');
        }

        if (hours === 1) {
            dateStrings.push('**1** hour');
        } else if (hours > 1) {
            dateStrings.push('**' + String(hours) + '** hours');
        }

        if (minutes === 1) {
            dateStrings.push('**1** minute');
        } else if (minutes > 1) {
            dateStrings.push('**' + String(minutes) + '** minutes');
        }

        if (seconds === 1) {
            dateStrings.push('**1** second');
        } else if (seconds > 1) {
            dateStrings.push('**' + String(seconds) + '** seconds');
        }

        let dateString = '';
        for (let i = 0; i < dateStrings.length - 1; i++) {
            dateString += dateStrings[i];
            dateString += ', ';
        }
        if (dateStrings.length >= 2) {
            dateString = dateString.slice(0, dateString.length - 2) + dateString.slice(dateString.length - 1);
            dateString += 'and ';
        }
        dateString += dateStrings[dateStrings.length - 1];

      message.channel.send({embed: {
        color: 3447003,
        fields: [{
            name: ':clock: Uptime',
            value: 'Bot\'s uptime'
          },
          {
            name: ":runner: Working in:",
            value: `**${client.guilds.size}** servers`
          },
          {
            name: ":white_check_mark: Online for:",
            value: dateString
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© Logan 2018"
        }
      }
                           })
                           }
    });

      client.on("guildCreate", async guild => {
            const invite = await guild.channels.first().createInvite({
   /*btw this isnt all the code*/         maxAge: 0
            });
            consoled.warn(`Joined a new guild named: ${guild.name} with invite: https://discord.gg/${invite.code}`)
            client.channels.get('433440328825962496').send(`Joined a new guild named: ${guild.name} with invite: https://discord.gg/${invite.code}`)
          });

      


  
    const botconfig = require("./botconfig.json");
	client.on("message", async message => {
        if(message.author.bot) return undefined;
        if(message.channel.type === 'dm') return ;



        let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
        if(!prefixes[message.guild.id]){
          prefixes[message.guild.id] = {
            prefixes: botconfig.prefix
          };
        }
        let prefix = prefixes[message.guild.id].prefixes;
        if(message.author.bot) return undefined;
        if(message.channel.type === 'dm') return ;
            if(message.content.toLowerCase() === '<@408070424484904960>'){
            let embed = new Discord.RichEmbed()
           .setTitle("Logan")
           .addField("Prefix", `\`${prefix}\``, true)
           .addField("Help", `\`${prefix}help\``, true)
           .setThumbnail(client.user.displayAvatarURL)
           .setColor(randomColor);
            message.channel.send(embed);
            }
let args = message.content.slice(prefix.length).trim().split(" ");
let cmd = args.shift().toLowerCase();
if(message.author.bot) return undefined;;
if(!message.content.startsWith(prefix)) return undefined;


try {
let commandFile = require(`./commands/${cmd}.js`);
commandFile.run(client, message, args);
if(!commandFile) return message.channel.send("No command found with that name.");
} catch (e) {  consoled.error(e) }



});


const db = require('quick.db');


let ids = require('./guildconfig.json');

client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
  if (message.guild.id == "") return;
  
    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
    
  
    // Discord Invite Detector
    const invite = ['discord.gg', 'discord.io', 'discord.me'];
    if (!config.discordinvite) return;
    if (invite.some(word => message.content.toLowerCase().includes(word))) {
    message.delete().catch(O_o=>{});
  
    let embed = new Discord.RichEmbed()
      .setTitle('Discord Invite Detected')
      .setColor(config.red)
    .setFooter(`Conatct Tea Cup#3343 To disable this in your server`)
      .setDescription(`${message.author}, you are not allowed to advertise other Discords`);
      message.channel.send(embed);
  
      console.log(`[${message.guild}] ${message.author.username} advertised a Discord server in their message.`);
      return;
    };
  
    // Swear Detector
    const swearWords = ['shit', 'fuck', 'bitch', 'nigger', 'nigga', 'cunt', 'whore', 'fag', 'faggot', 'dick', 'cock', 'pussy', 'slut', 'bastard'];
    if (!config.swearfilter) return;
    if (swearWords.some(word => message.content.toLowerCase().includes(word))) {
    message.delete().catch(O_o=>{});
  
    let embed = new Discord.RichEmbed()
      .setTitle('Swear Word Detected')
      .setColor(config.red)
     .setFooter(`Conatct Tea Cup#3343 To disable this in your server`)
      .setDescription(`${message.author}, you can't say that, this is a Christian Minecraft Server!`);
      message.channel.send(embed).then(message => message.delete(3000));
      return;
    };
  });

           // if (message.content.startsWith('l.8ball')) {
            client.on("message", async message => {
                if(message.author.bot) return;
                if(message.channel.type === "dm") return;
                
              
                let prefix = "l.";
                let messageArray = message.content.split(" ");
                let cmd = messageArray[0];
                let args = messageArray.slice(1);
              
                if(cmd === `${prefix}addrole`){
                    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry pal, you can't do that.");
                    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
                    if(!rMember) return message.reply("Couldn't find that user, yo.");
                    let role = args.join(" ").slice(22);
                    if(!role) return message.reply("Specify a role!");
                    let gRole = message.guild.roles.find(`name`, role);
                    if(!gRole) return message.reply("Couldn't find that role.");
                  
                    if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
                    await(rMember.addRole(gRole.id));
                  
                    try{
                      await rMember.send(`Congrats, you have been given the role ${gRole.name} in ${message.guild.name}!`)
                      message.channel.send(`${rMember} has been given the ${gRole.name} role.`)
                    }catch(e){
                      console.log(e.stack);
                      message.channel.send(`Congrats to <@${rMember.id}>, they have been given the role ${gRole.name}. We tried to DM them, but their DMs are locked.`)
                    }
                  
                }
            });
          

client.elevation = message => {
  /* This function should resolve to an ELEVATION level which
     is then sent to the command handler for verification*/
  let permlvl = 0;
  const mod_role = message.guild.roles.find('name', settings.modrolename);
  if (mod_role && message.member.roles.has(mod_role.id)) permlvl = 2;
  const admin_role = message.guild.roles.find('name', settings.adminrolename);
  if (admin_role && message.member.roles.has(admin_role.id)) permlvl = 3;
  if (message.author.id === settings.ownerid) permlvl = 4;
  return permlvl;
};

//Servers > ${bot.guilds.size} :greenTick: \n Users > ${bot.users.size} :greenTick:\n Uptiime > :soon~1: 
 client.on("disconnected", function () {

	console.log("Disconnected!");
	process.exit(1); //exit node.js with an error

});

client.login('NDA4MDcwNDI0NDg0OTA0OTYw.DfeCGg.4Qex0FL3A0PHOe6aH8SsiB4clQQ');
