const Discord = require("discord.js");
const client = new Discord.Client();
const weather = require('weather-js');
const mentionHook = new Discord.WebhookClient("", "");
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

const dbl = new DBL('DBL-TOKEN', { webhookPort: 5000, webhookAuth: 'password' });
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

client.on('message', (message) => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
  
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
      .setDescription(`${message.author}, you can't say that, this is a Christian Minecraft Server!`);
      message.channel.send(embed).then(message => message.delete(3000));
      return;
    };
  });

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

 client.on("disconnected", function () {

	console.log("Disconnected!");
	process.exit(1); //exit node.js with an error

});




// Logs of the bot leaves a server







  

    
    client.on('message', function (message) {
        const logsCommands = client.channels.get(settings.humanChannelid);
      
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

client.login('TOKEN');
