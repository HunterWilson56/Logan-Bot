const Discord = require("discord.js");
const client = new Discord.Client();
const weather = require('weather-js');
const mentionHook = new Discord.WebhookClient("428273869359546369", "Huj8BVYOEec4ZRttJ2vuCTSJuyB_3UcCcaLkIzyOithSkSaqCKbF0KiK36MIaNLYLGV2");
const moment = require("moment");
const config = require("./config.json");
const settings = require("./settings.json");
const help = require("./botconfig.json");
var ffmpeg = require('FFMPEG');
const fs = require("fs");
const pm2 = require("pm2")
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();



var embed = new Discord.RichEmbed();
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });

const DBL = require('dblapi.js');

const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwODA3MDQyNDQ4NDkwNDk2MCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTIyNDU3MTkzfQ.jzvqvJ-xtxkZ8eoNkmrn5V_PaP4A5DqQxk7pcKSsbgA', { webhookPort: 5000, webhookAuth: 'password' });
dbl.webhook.on('ready', hook => {
  console.log(`Webhook running at http://${hook.hostname}:${hook.port}${hook.path}`);
});
dbl.webhook.on('vote', vote => {
  console.log(`User with ID ${vote.user} just voted!`);
});
client.on('ready', () => {
    setInterval(() => {
        dbl.postStats(client.guilds.size);
    }, 1800000);
});
//const Manager = new Discord.ShardingManager('./index.js');
//Manager.spawn(2); 

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

    console.log(clientonmessage);
    client.user.setActivity(
        `l.help | on ${client.guilds.size} servers|Vrs;1.7.0`, { type: settings.statusTYPE });
    });
//l.help | on ${client.guilds.size} servers|Vrs;1.6.2
const fetch = require('snekfetch');
async function postStats(client) {
    const boatListKey = "n2vez235je17qm3ay3d63ygspfcz3k11ltlnjucomf5bldq5wd";
    try {
        await fetch.post("https://boat-list.glitch.me/api/stats/" + client.user.id + "/" + boatListKey + "/?count=" + client.guilds.size);
        console.log("Finished Posting Server Count");
    }
    catch(e) {
        console.log(e);
    }
}

async function postStats(client) {
    const discordbotsKey = "d063z0lhrld3fxap0cvu5ba6as0xksat8ioswpoi1w1pe4ph35ez4xpum9nuv3ojq6jx428fxu7bafjgj4p0mblno95ktkp0ohrs";
    try {
        await fetch.post("https://discordbots.glitch.me/api/stats/" + client.user.id + "/" + boatListKey + "/?count=" + client.guilds.size);
        console.log("Finished Posting Server Count");
    }
    catch(e) {
        console.log(e);
    }
}

function hook(channel, title, message, color, avatar) { // This function uses quite a few options. The last 2 are optional.

    // Reassign default parameters - If any are blank.
    if (!channel) return console.log('Channel not specified.');
    if (!title) return console.log('Title not specified.');
    if (!message) return console.log('Message not specified.');
    if (!color) color = 'd9a744'; // This is an optional variable. Therefore the default HEX color will be whatever you post there. Mine will be d9a744
    if (!avatar) avatar = 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png' // This is also an optional variable, you can change the default to any icon.

    // We want to remove spaces from color & url, since they might have it on the sides.
    color = color.replace(/\s/g, '');
    avatar = avatar.replace(/\s/g, '');

    // This is the start of creating the webhook
    channel.fetchWebhooks() // This gets the webhooks in the channel
        .then(webhook => {

            // Fetches the webhook we will use for each hook
            let foundHook = webhook.find('name', 'Webhook'); // You can rename 'Webhook' to the name of your bot if you like, people will see if under the webhooks tab of the channel.

            // This runs if the webhook is not found.
            if (!foundHook) {
                channel.createWebhook('Webhook', 'https://cdn4.iconfinder.com/data/icons/technology-devices-1/500/speech-bubble-128.png') // Make sure this is the same thing for when you search for the webhook. The png image will be the default image seen under the channel. Change it to whatever you want.
                    .then(webhook => {
                        // Finally send the webhook
                        webhook.send('', {
                            "username": title,
                            "avatarURL": avatar,
                            "embeds": [{
                                "color": parseInt(`0x${color}`),
                                "description":message
                            }]
                        })
                            .catch(error => { // We also want to make sure if an error is found, to report it in chat.
                                console.log(error);
                                return channel.send('**Something went wrong when sending the webhook. Please check console.**');
                            })
                    })
            } else { // That webhook was only for if it couldn't find the original webhook
                foundHook.send('', { // This means you can just copy and paste the webhook & catch part.
                    "username": title,
                    "avatarURL": avatar,
                    "embeds": [{
                        "color": parseInt(`0x${color}`),
                        "description":message
                    }]
                })
                    .catch(error => { // We also want to make sure if an error is found, to report it in chat.
                        console.log(error);
                        return channel.send('**Something went wrong when sending the webhook. Please check console.**');
                    })
                }

        })

}



  
  fs.readdir("./commands/", (err, files) => {
    console.log(`Loaded ${files.length} commands.`)
	if(err) console.log(err);
	let jsfile = files.filter(f => f.split(".").pop() === "js");
	if(jsfile.length <= 0){
	console.log("Couldn't find commands.");
	return;
	}


	jsfile.forEach((f, i) =>{
	let props = require(`./commands/${f}`);
	console.log(`${f} loaded!`);
	
	});
	});

	client.on("message", async message => {
        if(message.author.bot) return undefined;
        if(message.channel.type === 'dm') return ;



let prefix = "l.";
let args = message.content.slice(prefix.length).trim().split(" ");
let cmd = args.shift().toLowerCase();
if(message.author.bot) return undefined;;
if(!message.content.startsWith(prefix)) return undefined;


try {
let commandFile = require(`./commands/${cmd}.js`);
commandFile.run(bot, message, args);
if(!commandFile) return message.channel.send("No command found with that name.");
} catch (e) { console.log(e) }



});

  client.on('guildMemberAdd', member => {
	const members = member.guild.memberCount;
	const channel = member.guild.channels.find('name', 'welcome');
	if (!channel) return;
	let role = member.guild.roles.find(`name`, "User");
	
	let Embed = new Discord.RichEmbed()
	.setTitle(`${member.displayName}, Welcome to ${member.guild.name}`)
    .setColor(randomColor)	
	.setDescription(`Welcome My Friend!`)
	.addField('Users: ', `${members}`, true)
	channel.send(Embed);
	});
	client.on('guildMemberRemove', member => {
	const channel = member.guild.channels.find('name', 'welcome');
	if (!channel) return;
	const members = member.guild.memberCount;
	let Embed = new Discord.RichEmbed()
    .setColor(randomColor)
	.setDescription(`${member.displayName}, has left the server! We have ${members} members now.`)

	channel.send(Embed);
    });
    

    client.on('guildCreate', guild => {

        guild.owner.send("Thank You for adding me  Type `l.help` in your server to see my commands! ")
        
        });

        client.on("guildCreate", async guild => {
            const logsServerJoin = client.channels.get(settings.logsChannelID);
           
        
        
            console.log(`The bot just joined to ${guild.name}, Owned by ${guild.owner.user.tag}`);
            
            const embed = new Discord.RichEmbed()
            .setColor(0x00AE86)
            .setAuthor(`i Joined ${guild.name}`)
            .setThumbnail(guild.iconURL)
            .addField(":wave: wooo a new Server!!!","cant wait to see whats in it")
            .addField(":white_small_square: Owner", guild.owner)
            .addField(":white_small_square: ID", guild.id, true)
            .addField(":white_small_square: Users", guild.memberCount, true)
            .addField(":white_small_square: Channels", guild.channels.size, true)
            
            logsServerJoin.send(embed);
        
            client.user.setActivity(
                `l.help | on ${client.guilds.size} servers|Vrs;1.6.2`, { type: settings.statusTYPE });
            });          

    client.on("guildDelete", guild => {
        const logsServerLeave = client.channels.get(settings.logsChannelID);
        console.log(`The bot has been left ${guild.name}, Owned by ${guild.owner.user.tag}`);
        const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setAuthor(` i Left ${guild.name}`)
        .setThumbnail(guild.iconURL)
        .addField(":door: :( i was removed ")
        .addField(":white_small_square: Owner", guild.owner)
        .addField(":white_small_square: ID", guild.id, true)
        .addField(":white_small_square: Users", guild.memberCount, true)
       
        logsServerLeave.send(embed);
        client.user.setActivity(
            `l.help | on ${client.guilds.size} servers|Vrs;1.6.2`, { type: settings.statusTYPE });
        });
      
        client.on("guildCreate", async guild => {
            const invite = await guild.channels.first().createInvite({
              maxAge: 0
            });
            console.log(`Joined a new guild named: ${guild.name} with invite: https://discord.gg/${invite.code}`)
          });


const prefix = "l.";






// Logs of the bot leaves a server




client.on("message", async message => {
    if (message.author.bot) return;
    if (message.content.indexOf("l.") !== 0) return;
    const args = message.content.slice("l.".length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command == "ping") {
        const time = await message.channel.send("Pong")
        message.channel.bulkDelete(2),
        message.channel.send({embed: {
            title: "**Pong!**",
            color: 3447003,
            description: `**Latency:** ${time.createdTimestamp - message.createdTimestamp}ms\n**API Latency:** ${Math.round(client.ping)}ms`
        }})
    }
});




// Turn bot off (destroy), then turn it back on

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = "l.";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}kick`){

    //!kick @daeshan askin for it

    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No can do pal!");
    if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor(randomColor)
    .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
    .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Kicked In", message.channel)
    .addField("Tiime", message.createdAt)
    .addField("Reason", kReason);

    let kickChannel = message.guild.channels.find(`name`, "mod-log");
    if(!kickChannel) return message.channel.send("Can't find `mod log` channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);

    return;
  }

  if(cmd === `${prefix}ban`){

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("No can do pal!");
    if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("That person can't be kicked!");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor(randomColor)
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send("Can't find `mod-log` channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);


    return;
  }

  if(cmd === `${prefix}report`){
        

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("could not find the user!");
    let reason = args.join(" ").slice(22);
    
    let reportEmbed = new Discord.RichEmbed()
    .setDescription("reports")
    .setColor("#9B59B6")
    .addField("Reported By",`<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Reason", reason)
    .addField("Reported User", `${rUser} with ID: ${rUser.id}`);

    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send("Can't find `mod-log` channel.");

    incidentchannel.send(reportEmbed);
    return;
  }
  if(cmd === `${prefix}todolist`){
       
    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("ToDo List ")
    .setColor(randomColor)
    .setThumbnail(bicon)
    .addField("Role Commands And Other Command Edits & Setup Command",'And Eonomy?') 
    message.channel.send(botembed);
    
    return;
  }
  if(cmd === `${prefix}Commands`){

    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Commands For Logan Bot!")
    .setColor(randomColor)
    .setThumbnail(bicon)
    .addField("Main Commands",'|`l.hi`|`l.invite`|`l.info`|\n|`l.help`|`l.yt`|`l.games`|\n |`l.suggest`|`l.ping`|`l.afk`|\n |`l.web`|`l.vote`|`l.stats`|\n |`l.log`|`l.roll`|`l.autow`|\n |`l.8ball`|`l.weather`|`l.serverinfo`|\n |`l.botinfo`|`l.userinfo`|`l.uptime`| \n|`l.softban`|`l.ownerhelp`|`l.mute`| \n |`l.botservers`|`l.report`| \n|`l.translate`|`l.todolist`|`l.request`|\n `l.donate`|`l.issues`|`l.poll`|\n |`l.warnlvl`|`l.quiz`| More Coming')
    .addField("Music",'**This is a little buggy and might not sound good** `l.play`|`l.stop`|`l.skip`|`l.pause`|`l.resume`|`l.volume`|`l.queue`| \n')
    .addField("Moderation",'l.modhelp' )
    .addField("Developer Only",'l.ownerhelp')
    .addField("Level Commands", 'Locked :lock:');

    return message.channel.send(botembed);
}



});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = "l.";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
if(cmd === `${prefix}stats`){

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
    let bicon = client.user.displayAvatarURL;
    let statsembed = new Discord.RichEmbed()
    .setDescription("Stats")
    .setColor(randomColor)
    .setThumbnail(bicon)
    .addField("Servers",client.guilds.size)
    .addField("Users",client.users.size)
    .addField("Uptime",dateString)
    .addField(`• Mem Usage `,` :: ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
    .addField(`:books: • Node      `,` :: ${process.version}`,true)
    .addField(`:book: • Discord.js`,` :: v${Discord.version}`,true);


    


    return message.channel.send(statsembed);
}
if(cmd === `${prefix}info`){

    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Commands For Logan Bot!")
    .setColor(randomColor)
    .setThumbnail(bicon)
    .addField("Birth Day",'31-1-2018 | 20:26:10')
    .addField("i Am",`Logan`,true)
    .addField("Best Firend",'Tea Cup#3343',true);

    return message.channel.send(botembed);
}
if(cmd === `${prefix}thumb`){
    message.channel.send("is this a poll?")

}


// This episode will be going over the hook command.
});




client.on("message", async message => {
  if (message.author.equals(client.user)) return;

  if (!message.content.startsWith(settings.botPREFIX)) return;
  const logsCommands = client.channels.get(settings.humanChannelid);

  //Disables commands in a private chat
 
  if  (message.channel.type == "dm") {
    console.log(`${message.author.tag} tried to use a command in DM!`);
    return logsCommands.send(`${message.author.tag} tried to use a command in DM!`);
}
//Users blacklist
if (message.author.id == "301880249350619146") {
    console.log(`[BlackList] ${message.author.tag} tried to use a command!`);
    return logsCommands.send(`[BlackList] ${message.author.tag} tried to use a command!`);
}

//Channels blacklist
if (message.channel.id == "") return;

//Servers blacklist
if (message.guild.id == "") return;

  var args = message.content.substring(settings.botPREFIX.length).split(" ");
  switch (args[0]) {
    case "ping":
        console.log(`${message.author.tag} used the ${settings.botPREFIX}ping command!`);
        logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}ping command!`);
        message.reply("Pong!");
    break;

    case "botinfo":
    console.log(`${message.author.tag} used the ${settings.botPREFIX}botinfo command!`);
    logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}botinfo command!`);

    message.channel.send({embed: {
        color: 3447003,
        title: "Info:",
        description: "This is the info about the bot",
        fields: [{
            name: "Created by:",
            value: "This bot created by Tea Cup#3343"
          },
          {
            name: "Made with:",
            value: "This bot made with [Discord.JS](http://discord.js.org)"
          },
          {
            name: "Contact me:",
            value: "_**Tea Cup#3343**_"
          },
          {
            name: "Social Media",
            value: " [Steam]() "
          },
          {
            name: "Invite the bot here",
            value: ":robot: **l.invite**"
          }
        ],
        timestamp: new Date(),
        footer: {
          icon_url: client.user.avatarURL,
          text: "© Logan 2018"
        }
      }
    });

    case "userinfo":
    console.log(`${message.author.tag} used the ${settings.botPREFIX}userinfo command!`);
    logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}userinfo command!`);

  
    let user = message.mentions.users.first();
    if (!user) {
        return message.reply('You must mention someone!');
    }
    const mentioneduser = message.mentions.users.first();
    const joineddiscord = (mentioneduser.createdAt.getDate() + 1) + '-' + (mentioneduser.createdAt.getMonth() + 1) + '-' + mentioneduser.createdAt.getFullYear() + ' | ' + mentioneduser.createdAt.getHours() + ':' + mentioneduser.createdAt.getMinutes() + ':' + mentioneduser.createdAt.getSeconds();
    let game;
    if (user.presence.game === null) {
        game = 'Not currently Playing.';
    } else {
        game = user.presence.game.name;
    }
    let messag;
    if (user.lastMessage === null) {
        messag = 'He didnt sent a message.';
    } else {
        messag = user.lastMessage;
    }
    let status;
    if (user.presence.status === 'online') {
        status = ':green_heart:';
    } else if (user.presence.status === 'dnd') {
        status = ':heart:';
    } else if (user.presence.status === 'idle') {
        status = ':yellow_heart:';
    } else if (user.presence.status === 'offline') {
        status = ':black_heart:';
    }
  // Let afk;
  // if (user.presence.data.afk === true) {
  //   afk = "✅"
  // } else {
  //   afk = "❌"
  // }
    let stat;
    if (user.presence.status === 'offline') {
        stat = 0x000000;
    } else if (user.presence.status === 'online') {
        stat = 0x00AA4C;
    } else if (user.presence.status === 'dnd') {
        stat = 0x9C0000;
    } else if (user.presence.status === 'idle') {
        stat = 0xF7C035;
    }
  message.channel.send({embed: {
    color: 3447003,
    author: {
      name: `Got some info about ${user.username}`,
      icon_url: user.displayAvatarURL
    },
    fields: [{
        name: '**UserInfo:**',
        value: `**Username:** ${user.tag}\n**Joined Discord:** ${joineddiscord}\n**Last message:** ${messag}\n**Playing:** ${game}\n**Status:** ${status}\n**Bot?** ${user.bot}`
      },
      {
        name: 'DiscordInfo:',
        value: `**Discriminator:** ${user.discriminator}\n**ID:** ${user.id}\n**Username:** ${user.username}`
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© NotABot"
    }
  }
});
    break;
    case "issue":
    console.log(`${message.author.tag} used the ${settings.botPREFIX}issue command!`);
        logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}issue command!`);

    message.reply('If the bot got some bugs you can report them here! :heart: https://discord.gg/kqrjCa3');
    break;

    case "request":
    console.log(`${message.author.tag} used the ${settings.botPREFIX}request command!`);
        logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}request command!`);

    message.reply('If you want to request more cool features to the bot, you can request them here! :heart: https://discord.gg/v2fkT');
    break;
    case "caps":
    console.log(`${message.author.tag} used the ${settings.botPREFIX}caps command!`);
        logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}caps command!`);

    const sponge = require('spongeuscator');

    if (message.content.split(' ').slice(1).join(' ').length < 4) {
        return message.channel.send('Please give a message with more than 4 chars');
    }
        message.channel.send(sponge(message.content.split(' ').slice(1).join(' ')));
    break;

    case "advice":
    console.log(`${message.author.tag} used the ${settings.botPREFIX}advice command!`);
        logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}advice command!`);

    const advicesf = require('snekfetch');

        let r = await advicesf.get('http://api.adviceslip.com/advice');

        let advice = JSON.parse(r.body).slip.advice;

        message.channel.send({embed: {
            color: 3447003,
            author: {
              name: client.user.username,
              icon_url: client.user.avatarURL
            },
            fields: [{
                name: "Advice:",
                value: `\`${advice}\``
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Logan © 2018 "
            }
          }
        });
    break;

    case "donate":
    console.log(`${message.author.tag} used the ${settings.botPREFIX}donate command!`);
        logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}donate command!`);

    message.channel.send(`Hey there, Do want to donate for \`Logan\`? This is the link https://www.paypal.com/pools/c/826YOnBmFY, but, Why would you donate us?\n\
**1.** I'm doing it for free and would love for Support! \n\
**2.** Logan needs esources and I need to pay for it..\n\
**3.** I'm working on this bot everyday and putting my daily affort in it!\n\
**Thank you if you decided to become a partner Also Dm me for your role!!** :heart:`);
    break;
    case "avatar":
    console.log(`${message.author.tag} used the ${settings.botPREFIX}avatar command!`);
    logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}avatar command!`);
    
    if(message.mentions.users.first()) { //Check if the message has a mention in it.
        let user = message.mentions.users.first(); //Since message.mentions.users returns a collection; we must use the first() method to get the first in the collection.
        let output = user.username + "#" + user.discriminator /*Username and Discriminator*/ +
        "\nAvatar URL: " + user.avatarURL; /*The Avatar URL*/
        message.channel.sendMessage(output); //We send the output in the current channel.
  } else {
        message.reply("Please mention someone :thinking:"); //Reply with a mention saying "Invalid user."
  }
    break;
    case "translate":
    console.log(`${message.author.tag} used the ${settings.botPREFIX}translate command!`);
    logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}translate command!`);

    const translate = require('google-translate-api');

let toTrans = message.content.split(' ').slice(1);
let language;

language = toTrans[toTrans.length - 2] === 'to' ? toTrans.slice(toTrans.length - 2, toTrans.length)[1].trim() : undefined;
if (!language) {
    return message.reply(`Please supply valid agruments.\n**Example** \`${settings.botPREFIX}translate [text] to [language]\``);
}
let finalToTrans = toTrans.slice(toTrans.length - toTrans.length, toTrans.length - 2).join(' ');
translate(finalToTrans, {to: language}).then(res => {
        message.channel.send({embed: {
            color: 3447003,
            author: {
              name: 'Logan\'s translator',
              icon_url: client.user.avatarURL
            },
            fields: [{
                name: "Translator",
                value: `**From:** ${res.from.language.iso}\n\`\`\`${finalToTrans}\`\`\`\n**To: **${language}\n\`\`\`${res.text}\`\`\``
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "© Logan 2018"
            }
          }
        });
}).catch(err => {
    message.channel.send({
        embed: {
            description: '❌ We could not find the supplied language.',
            color: 0xE8642B
        }
    });
});
break;
    case "uptime":
    console.log(`${message.author.tag} used the ${settings.botPREFIX}uptime command!`);
    logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}uptime command!`);

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
});
    break;

  case "modhelp":
  console.log(`${message.author.tag} used the ${settings.botPREFIX}modhelp command!`);
  logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}modhelp command!`);

  message.reply("Please check your direct messages :inbox_tray: (Moderation commands.)");

  message.author.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      title: "Bot's commands",
      fields: [{
          name: "Moderation commands",
          value: `**${settings.botPREFIX}ban** - Bans a user from your server! (Moderators only!)\n\
**${settings.botPREFIX}kick** - Kicks a user out of the server! (Mederation only!)\n\
**${settings.botPREFIX}mute** - Muted a user with a **muted** role! (Moderation only!)\n\
**${settings.botPREFIX}unmute** - Unmutes a user and removes the **muted** role. (Moderation only!)\n\
**${settings.botPREFIX}purge** - Deletes Messages\n
**${settings.botPREFIX}warn** - warn a user\n
**${settings.botPREFIX}warnlvl - gives you your level of warn\n
**${settings.botPREFIX}softban** - Kicks a user and deletes his messages. (Moderation only!)`
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Logan 2018"
      }
    }
  });
  break;
  case "serverinfo":
  console.log(`${message.author.tag} used the ${settings.botPREFIX}serverinfo command!`);
  logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}serverinfo command!`);




  let guild = message.guild;
  let large = message.guild.large ? "✅" : "❎";
  let icon = message.guild.iconURL;

  let createdAtRaw = guild.createdAt.toDateString();
  let createdAt = createdAtRaw.split(" ");

  let textChannels = 0;
  let voiceChannels = 0;
  guild.channels.forEach(channel => {
  channel.type === "text" ? textChannels++ : voiceChannels++;
  });

  let emojis = [];
  guild.emojis.forEach(emoji => {
  emojis.push(`\`${emoji.name}\``);
  });
  emojis.length === 0 ? emojis = "None" : emojis = emojis.join(", ");

  let roles = [];
  guild.roles.forEach(role => {
    roles.push(`\`${role.name}\``);
  });
  roles = roles.join(", ");

  let embed = new Discord.RichEmbed()
  .setTitle(`Information about ${message.guild.name}`)
  .setColor(randomColor)
  .setThumbnail(icon)
  .addField('Guild Name', guild.name, true)
  .addField('Guild ID', guild.id, true)
  .addField('Guild Owner', guild.owner, true)
  .addField('Created At', `${createdAt[0]} ${createdAt[2]} ${createdAt[1]} ${createdAt[3]}`, true)
  .addField('Server Region', guild.region.toUpperCase(), true)
  .addField('Total Members:', guild.memberCount, true)
  .addField('Large', large, true)
  .addField('Verification Level', guild.verificationLevel, true)
  .addField('Text Channels', textChannels, true)
  .addField('Voice Channels', voiceChannels, true)
  .addField('Roles', `${guild.roles.size}`, true)
  .addField('Emojis', `${guild.emojis.size}`, true)


  return message.channel.send(embed);
  break;

  case "botservers":
  console.log(`${message.author.tag} used the ${settings.botPREFIX}botservers command!`);

  let Table = require(`cli-table`);
  let table = new Table({
      head: [
          `ID`,
          `Name`,
          `Users`,
          `Bots`,
          `Total`
      ], colWidths: [30, 50, 10, 10, 10]
  });
  client.guilds.map(g =>
    table.push(
      [g.id, g.name, g.members.filter(u => !u.user.bot).size, g.members.filter(u => u.user.bot).size, g.members.size]
    ));
  require(`snekfetch`)
  .post(`https://hastebin.com/documents`)
  .set(`Content-Type`, `application/raw`)
  .send(table.toString())
  .then(r =>
     message.channel.send(`Im inside these servers! http://hastebin.com/` + r.body.key));
  break;

  case "botping":
  console.log(`${message.author.tag} used the ${settings.botPREFIX}botping command!`);
  logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}botping command!`);


  message.channel.send({embed: {
      color: 3447003,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      fields: [{
          name: "Bot's ping:",
          value: `\`${client.ping}ms\``
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Logan 2018"
      }
    }
  });
  break;
  case "softban":
  console.log(`${message.author.tag} used the ${settings.botPREFIX}softban command!`);
  logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}softban command!`);


  let reasonSoftban = message.content.split(' ').slice(3).join(' ');
  let timeSoftban = message.content.split(' ')[2];
  let guildSoftban = message.guild;
  let modlogSoftban = message.guild.channels.find('name', 'mod-log');
  let userSoftban = message.mentions.users.first();
  if (!message.guild.member(message.author).hasPermission('BAN_MEMBERS')) {
      return message.reply(':lock: You need to have `BAN_MEMBERS` Permission to execute `SoftBan`');
  }
  if (!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) {
      return message.reply(':lock: I need to have `BAN_MEMBERS` Permission to execute `SoftBan`');
  }
  if (!modlogSoftban) {
      return message.reply('I need a text channel named `mod-log` to print my ban/kick logs in, please create one');
  }
  if (message.author.id === userSoftban.id) {
      return message.reply('You cant punish yourself :wink:');
  }
  if (message.mentions.users.size < 1) {
      return message.reply('You need to mention someone to SoftBan him!');
  }
  if (!reasonSoftban) {
      return message.reply(`You must give me a reason for the ban **Usage:**\`l.softban [@mention] [example]\``);
  }
  userSoftban.send(`You've just got softbanned from ${guildSoftban.name}  \n State reason: **${reasonSoftban}** \n **Disclamer**: In a softban you can come back straight away, we just got your messages deleted`);
  message.guild.ban(userSoftban, 2);
  setTimeout(() => {
      message.guild.unban(userSoftban.id);
  }, 0);

  modlogSoftban.send({embed: {
      color: 0x18FE26,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      fields: [{
          name: "Softban:",
          value: `**Softbanned:** ${userSoftban.username}#${userSoftban.discriminator}\n**Moderator:** ${message.author.username}\n**Reason:** ${reasonSoftban}`
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Logan 2018"
      }
    }
  });
  break;
  case "botname":
  console.log(`${message.author.tag} used the ${settings.botPREFIX}botname command!`);

  const botusername = message.content.split(' ').slice(1).join(' ');

  if (message.author.id == '338192747754160138') {
      client.user.setUsername(botusername);
      message.reply('Done. :ok_hand:');
  } else {
      message.delete();
      message.channel.send(`\`📛\` You don't have permissions to execute that command.`);
  }
  break;

  case "botavatar":
  console.log(`${message.author.tag} used the ${settings.botPREFIX}botavatar command!`);

  const botavatar = message.content.split(' ').slice(1).join(' ');
  var request = require("request").defaults({ "encoding" : null });

  if (message.author.id == '338192747754160138') {
request(botavatar, function (err, res, body) {
if (!err && res.statusCode === 200) {
  var data = "data:" + res.headers["content-type"] + ";base64," + new Buffer(body).toString("base64");
  client.user.setAvatar(botavatar).catch((error) => { message.channel.send('Beep boop, something went wrong. Check the console to see the error.'); console.log('Error on setavatar command:', error); });

  message.channel.send('Done. :ok_hand:');
}
});
  } else {
      message.delete();
      message.channel.send(`\`📛\` You don't have permissions to execute that command.`);
  }
  break;

  case "botnick":
  console.log(`${message.author.tag} used the ${settings.botPREFIX}botnick command!`);

  const botnickname = message.content.split(' ').slice(1).join(' ');

  if (message.author.id == '338192747754160138'){
      message.guild.members.get(client.user.id).setNickname(botnickname);
      message.channel.send('Done. :ok_hand:');
  } else {
      message.delete();
      message.channel.send(`\`📛\` You don't have permissions to execute that command.`);
  }
  break;



  case "say":
  console.log(`${message.author.tag} used the ${settings.botPREFIX}say command!`);

  const botsay = message.content.split(' ').slice(1).join(' ');

 
  {
    
      let bicon = client.user.displayAvatarURL;
      let sayembed = new Discord.RichEmbed()
      .setDescription("Say Embed")
      .setColor(randomColor)
      .setThumbnail(bicon)
      .addField(botsay,"You Asked For it");
    
  
  
      
  
  
      return message.channel.send(sayembed);
      
  
  }
  break;

  case "shutdown":
  console.log(`${message.author.tag} used the ${settings.botPREFIX}shutdown command!`);

  if (message.author.id == '338192747754160138' || message.author.id == '338192747754160138') { //399648813872185346
          const filterYes = m => m.content.startsWith('yes');
          message.reply('Shutting down... :skull:')
          .then(m => {
              process.exit()
          });
  } else {
      message.delete();
      message.channel.send(`\`📛\` You don't have permissions to execute that command.`);
  }
  break;

  case "ownerhelp":
  console.log(`${message.author.tag} used the ${settings.botPREFIX}ownerhelp command!`);

  if (message.author.id == '338192747754160138') {
      message.reply("Please check your direct messages :inbox_tray: (Owner commands.)");

      message.author.send({embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: "Bot's commands",
          fields: [{
              name: "Bot's owner commands",
              value: `**${settings.botPREFIX}botname** - Changes the bot's username. **Usage: ${settings.botPREFIX}botname [NAME]**\n\
**${settings.botPREFIX}botavatar** - Changes the bot's avatar. **Usage: ${settings.botPREFIX}botavatar [LINK]**\n\
**${settings.botPREFIX}botnick** - Changed the nickname in a server. **Usage: ${settings.botPREFIX}botnick [NICKNAME]**\n\
**${settings.botPREFIX}eval** - Evaluates a code. **Usage: ${settings.botPREFIX}eval [CODE]**\n\
**${settings.botPREFIX}shutdown** - Closes the CMD window!\n\
**${settings.botPREFIX}say** - Give the bot something to say!`
            }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: "© Logan 2018"
          }
        }
      });
  } else {
      message.delete();
      message.channel.send(`\`📛\` Only the owner of the bot can use this command.`);
  }
  break;
  case "mute":
  console.log(`${message.author.tag} used the ${settings.botPREFIX}mute command!`);
  logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}mute command!`);


  if (!message.guild.member(message.author).hasPermission('MUTE_MEMBERS')) {
      message.channel.send(':lock: **I** need `MANAGE_ROLES` Permissions to execute `mute`');
      return;
  }

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) {
      return message.reply(':lock: **I** need `MANAGE_ROLES` Permissions to execute `mute`')
  }
  const msmute = require('ms');
  let reasonMute = message.content.split(' ').slice(3).join(' ');
  let timeMute = message.content.split(' ')[2];
  let guildMute = message.guild;
// Let adminRoleMute = guild.roles.find("name", "TOA");
  let memberMute = message.guild.member;
  let modlogMute = message.guild.channels.find('name', 'mod-log');
  let userMute = message.mentions.users.first();
  let muteRoleMute = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!modlogMute) {
      return message.reply('I need a text channel named `mod-log` to print my ban/kick logs in, please create one');
  }

  if (!muteRoleMute) {
      return message.reply('`Please create a role called "Muted"`');
  }

  if (message.mentions.users.size < 1) {
      return message.reply('You need to mention someone to Mute .');
  }
  if (message.author.id === userMute.id) {
      return message.reply('You cant punish yourself :wink:');
  }
  if (!timeMute) {
      return message.reply('specify the time for the mute!**Usage:**`l.mute [@mention] [1m] [example]`');
  }
  if (!timeMute.match(/[1-60][s,m,h,d,w]/g)) {
      return message.reply('I need a valid time ! look at the Usage! right here: **Usage:**`l.mute [@mention] [1m] [example]`');
  }
  if (!reasonMute) {
      return message.reply('You must give me a reason for Mute **Usage:**`l.mute [@mention] [15m] [example]`');
  }
  if (reasonMute.time < 1) {
      return message.reply('TIME?').then(message => message.delete(2000));
  }
  if (reasonMute.length < 1) {
      return message.reply('You must give me a reason for Mute');
  }
  message.guild.member(userMute).addRole(muteRoleMute)

  setTimeout(() => {
      message.guild.member(userMute).removeRole(muteRoleMute)
  }, msmute(timeMute));
  message.guild.channels.filter(textchannel => textchannel.type === 'text').forEach(cnl => {
      cnl.overwritePermissions(muteRoleMute, {
          SEND_MESSAGES: false
      });
  });

  message.reply("This user has been muted.");

  modlogMute.send({embed: {
      color: 16745560,
      author: {
        name: client.user.username,
        icon_url: client.user.avatarURL
      },
      fields: [{
          name: 'Mute',
          value: `**Muted:**${userMute.username}#${userMute.discriminator}\n**Moderator:** ${message.author.username}\n**Duration:** ${msmute(msmute(timeMute), {long: true})}\n**Reason:** ${reasonMute}`
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© Logan 2018"
      }
    }
  });
  break;

  case "unmute":
  console.log(`${message.author.tag} used the ${settings.botPREFIX}unmute command!`);
  logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}unmute command!`);


  let guildUnmute = message.guild;
  let argsUnmute = message.content.split(' ').slice(1);
  let argresultUnmute = args.join(' ');
  let reasonUnmute = args;
  if (!message.guild.member(message.author).hasPermission('MANAGE_ROLES')) {
      return message.reply(':lock: **I** need `MANAGE_ROLES` Permissions to execute `mute`')
  }
  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) {
      return message.reply(':lock: **I** need `MANAGE_ROLES` Permissions to execute `mute`')
  }
  let userUnmute = message.mentions.users.first();
  let muteRoleUnmute = client.guilds.get(message.guild.id).roles.find('name', 'muted');
  if (message.mentions.users.size < 1) {
      return message.reply('You need to mention someone to unmute him!.');
  }
  message.guild.member(userUnmute).removeRole(muteRoleUnmute).then(() => {
      message.reply(`You've succesfully unmuted ${userUnmute}`);
  });
  break;

  case "loganhelp":
  console.log(`${message.author.tag} used the ${settings.botPREFIX}bluehelp command!`);
  logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}loganhelp command!`);


  if (message.author.id == '338192747754160138') {
      message.reply('Hello there my lord! Check your DM :wink:');

      message.author.send({embed: {
          color: 3447003,
          author: {
            name: client.user.username,
            icon_url: client.user.avatarURL
          },
          title: "Bot's commands",
          fields: [{
              name: "Logans Commands",
              value: `**${settings.botPREFIX}todo** - Shows Blue Malgeran's TODO list.\n\
**${settings.botPREFIX}eval** - Evaluates a code.\n\
**${settings.botPREFIX}shutdown** - Closes the CMD window.\n\
**${settings.botPREFIX}say** - Give the bot something to say!`
            }
          ],
          timestamp: new Date(),
          footer: {
            icon_url: client.user.avatarURL,
            text: "© Logan 2018"
          }
        }
      });
  } else {
      message.delete();
      message.channel.send(`\`📛\` You're not allowed to execute this command, only my lord can use this command!\n\
      \`Lord: Tea Cup#3343\``);
  }
  }
});
    


  

    
    client.on('message', function (message) {
        const logsCommands = client.channels.get(settings.humanChannelid);
        if (message.content.startsWith('l.8ball')) {
            logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}8ballcommand!`);
            const replies = ["It is certain",
            "It is decidedly so",
                "Without a doubt",
            "Yes, definitely",
                "You may rely on it",
            "As I see it, yes",
                "Most likely",
            "Outlook good",
                "Yes",
            "Signs point to yes",
                "Reply hazy try again",
            "Ask again later",
                "Better not tell you now",
            "Cannot predict now",
                "Concentrate and ask again",
            "Don't count on it",
                "My reply is no",
            "My sources say no",
                "Outlook not so good",
            "Very doubtful"];
                message.replytext = Math.floor((Math.random() * replies.length) + 0);
            return message.reply(replies[message.replytext]);
          }
          if (message.content.startsWith(prefix + 'HOOK')) {
            logsCommands.send(`${message.author.tag} used the ${settings.botPREFIX}hook command!`); // We are using a .startsWith because the command will have arguments.

            // Delete the message that the user sends
            message.delete();
        
            if (message === prefix + 'HOOK') { // This checks if the only thing they sent was 'Hook'
                return hook(message.channel, 'Hook Usage', `${prefix}hook <title>, <message>, [HEXcolor], [avatarURL]\n\n**<> is required\n[] is optional**`,'FC8469','https://cdn4.iconfinder.com/data/icons/global-logistics-3/512/129-512.png') // Remeber that \n means new line. This is also using a custom HEX id, and an image.
               
            }
        
            let hookArgs = message.content.slice(prefix.length + 4).split(","); 
            // This slices the first 6 letters (prefix & the word hook) then splits them by 'commas'
        
            hook(message.channel, hookArgs[0], hookArgs[1], hookArgs[2], hookArgs[3]); 
         
       
        }

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
          



//Servers > ${bot.guilds.size} :greenTick: \n Users > ${bot.users.size} :greenTick:\n Uptiime > :soon~1: 
    client.on("guildMemberAdd", (member) => {
        const logsCommands = client.channels.get(settings.humanChannelid);
        console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
       

        });

client.login('NDA4MDcwNDI0NDg0OTA0OTYw.DZSMew.ocmZ9ewzBrzpsRCEO_tZL4kHQvU');