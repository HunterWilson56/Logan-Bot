//Configuration
const http = require('http');
const express = require('express');
const app = express();
var bodyParser = require( 'body-parser' );
app.use( bodyParser.urlencoded( {
	extended: true 
} ) );
app.use( express.static( 'public' ) );
app.get( "/", function( request, response ) { 
	response.sendFile( __dirname + '/index.html' ); 
} ); 
app.listen(process.env.PORT);
app.get("/", (request, response) => {
    console.log(Date.now() + " Ping Received");
    response.sendStatus(200);
});
setInterval(() => {
    http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require(`discord.js`);
var config = require("./config.json");
var economy = require('discord-eco');
const chalk = require('chalk');
const fs = require("fs");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const {
    Client,
    Util
} = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube("AIzaSyB2NjfqpDEeuRwluBSdkAA9XpIZG6KfwK0");
//Yes I know. If you are on glitch.com there is an error here. ITS SO DUMB
const queue = new Map();
const favsong = ["https://www.youtube.com/watch?v=L-aN4Y84SYk",
    "https://www.youtube.com/watch?v=ODV-_VPTv1I",
    "https://www.youtube.com/watch?v=hMWFOyb-abs",
    "https://www.youtube.com/watch?v=b7FcWFNgS64",
    "https://www.youtube.com/watch?v=x3lP-7Sg4Uc",
    "https://www.youtube.com/watch?v=LpNMIzXTISY",
    "https://www.youtube.com/watch?v=TkDU8P9BVhU"
]
var midi = "297096161842429963"
var cur = "Credits:credit_card:"
var moncol = "28894c"
const daily = require("./daily.json");
//Bot:
client.on("ready", () => {
    console.log(`Logan is Pluged in.`);
    
});

client.on("message", async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 /*    if (command === "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    } *///Hosted local by teacup
    
   
  if(command === "ann") {
if (!message.author.id === midi && !message.author.id === "338192747754160138") return;
    var title = args[0]
      var content = args.slice(1).join(" ");
    var anne = new Discord.RichEmbed()
    .addField(title, content)
    .setColor("RANDOM")
    message.channel.send(anne)
    
    message.delete().catch(O_o=>{}); 
    
  }
  if (command === "bal") {
        economy.fetchBalance(message.author.id).then((i) => { // economy.fetchBalance grabs the userID, finds it, and puts it into 'i'.
            var balembed = new Discord.RichEmbed()
                .addField(message.author.username, `You have **${i.money}** ${cur} in your account.`)
                .setFooter(`Logan Bank Inc. ` + message.author.username + ` 's account.`, message.author.displayAvatarURL).setColor(moncol)
            message.channel.send(balembed)
        })
    }
    if (command === "roll") {
        economy.fetchBalance(message.author.id).then((o) => {
            var randrol = Math.floor(Math.random() * 10) - 6;
            const sayMessageiol = args.join(" ");
            var inted = parseInt(sayMessageiol);
            if (inted !== inted) {
                if (o.money >= inted - 1) {
                    message.channel.send("Please Enter an amount of " + cur + " from 1 -" + o.money);
                } else {
                    message.channel.send("No.")
                }
            } else {
                if (inted >= 0) {
                    if (o.money >= inted - 1) {
                        economy.updateBalance(message.author.id, inted * randrol).then((i) => {
                            if (o.money >= o.money + (inted * randrol)) {
                                var rollembed = new Discord.RichEmbed().setTitle(message.author.username).addField(`You lost ` + inted * randrol + ` ` + cur, `New Balance:** ${i.money}**`).setFooter(`Logan Casino Inc. ` + message.author.username + ` 's account.'`, message.author.displayAvatarURL).setColor("ff0000");
                            } else {
                                var rollembed = new Discord.RichEmbed().setTitle(message.author.username).addField(`You got ` + inted * randrol + ` ` + cur, `New Balance:** ${i.money}**`).setFooter(`Logan Casino Inc. ` + message.author.username + ` 's account.'`, message.author.displayAvatarURL).setColor(moncol);
                            }
                            message.channel.send(rollembed);
                        })
                    } else {
                        message.channel.send("You do not have enough " + cur + " to gamble this amount!")
                    }
                } else {
                    message.channel.send("Do you want me to roll **your** money into the negatives.")
                }
            }
        })
    }
    if (command === "give") {
        if (message.author.id === midi || message.author.id === "338192747754160138") {
            var gr = message.mentions.members.first()
            if (!gr) return message.reply("Please provide a vaild Mention.");
            var atg = parseInt(args[1], 10)
            if (!atg) return message.channel.send(message.author.username + " Please provide an amount to give")
            economy.updateBalance(gr.id, atg).then((i) => { // economy.fetchBalance grabs the userID, finds it, and puts it into 'i'.
                var givebed = new Discord.RichEmbed().setTitle(`**Balance:** ${i.money}`).setFooter(`Logan Funding Inc. ` + message.mentions.users.first().username + ` 's account was funded.`, message.mentions.users.first().displayAvatarURL).setColor(moncol);
                message.channel.send(givebed)
            })
        }
    }
    if (command === "pay") {
        let member = message.mentions.members.first();
        let amountq = args.slice(1).join(" ");
        var amount = parseInt(amountq);
        if (!member) {
            message.channel.send("Please provide a valid mention!")
        } else {
            economy.fetchBalance(message.author.id).then((o) => {
                if (amount !== amount) {
                    if (o.money >= amount - 1) {
                        message.channel.send("Please Enter an amount of " + cur + " from 1 -" + o.money);
                    } else {
                        message.channel.send("That isn't a valid amount of" + " " + cur)
                    }
                } else {
                    if (amount >= 0) {
                        if (o.money >= amount - 1) {
                            //UpdateBal
                            economy.updateBalance(message.author.id, -amount)
                            economy.updateBalance(member.id, amount)
                            var payembed = new Discord.RichEmbed().setTitle("Paid " + message.mentions.users.first().username + " " + amount + " " + cur).addField(message.author.username + " paid", message.mentions.users.first().username + " " + amount + " " + cur).setDescription("Transaction Made. The funds have been paid.").setFooter(`Logan Bank Inc. `).setColor(moncol);
                            message.channel.send(payembed);
                            //UpdateBalend
                        }
                    }
                }
            })
        }
    }
    if (command === "daily") {
        //<getdate>\\
        var fulldate = new Date();
        var date = fulldate.getDate();
        console.log(date)
        //</getdate>\\
        if (!daily[message.author.id]) {
            daily[message.author.id] = {
                last: -7
            };
        }

        if (daily[message.author.id].last == date) return message.channel.send("You have already used up today's daily. Come back tommorow");
        economy.updateBalance(message.author.id, 100)
        message.channel.send("You have recived 100 " + cur)
        daily[message.author.id].last = date

    }

if (command === "commands") {
var EconomyHelpEmbed = new Discord.RichEmbed()
            .setColor(moncol)
            .setTitle("Economy Commands")
            .addField("Balance", "l.bal")
            .addField("Payment", "l.pay [user] [amount]")
            .addField("Alea Jacta Est", "l.roll [amount]")
            .addField("Daily Paycheck", "l.daily")
var MusicHelpEmbed = new Discord.RichEmbed()
.setColor("482f95")
.setTitle("Music Commands")
.addField("Play", "l.play [SongTitle/YouTubeUrl]")
.addField(`Fav`, `l.play [1- ${(favsong.length) - 1}]`)
.addField("Stop", "`l.stop")
.addField("Skip","l.skip")
.addField("Queue", "l.queue")
.addField("Volume","l.volume [1-5]")
.setFooter("You Must have the role **Logan DJ** to use music commands")
var ts = message.channel
ts.send(MusicHelpEmbed)
        ts.send(EconomyHelpEmbed)
}
});

client.on('message', message => {
    const logs = client.channels.get("437370320001695754");
    if(message.channel.id == "338192747754160138") return;
    logs.send({embed: {
        color: 16766720,
        description: `**Message:** ${message.content}\n**Server:** ${message.guild.name}\n**User:** <@${message.author.id}>\n**Channel:** ${message.channel.name}`
    }})
})

client.on('message', async msg => {
  if (msg.guild.name === "Discord Bot List") return;  
  if (!msg.content) return;
  console.log(msg.author.username + " said stuff in " + msg.channel.name + " in " + msg.guild.name + ":\n" + msg.content)
    if (msg.author.id === midi || msg.author.id === "338192747754160138" || msg.author.id === "274198819216949248" || msg.member.roles.some(r => ["Logan DJ", "The Music Meister"].includes(r.name))) {
        if (!msg.content.startsWith(config.prefix)) return undefined;
        const args = msg.content.split(' ');
        const searchString = args.slice(1).join(' ');
        var url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
        const serverQueue = queue.get(msg.guild.id);
        let command = msg.content.toLowerCase().split(' ')[0];
        console.log(command)
        command = command.slice(config.prefix.length)
        console.log(command)
        console.log
        if (command === 'play') {
            const voiceChannel = msg.member.voiceChannel;
            if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
            if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                const playlist = await youtube.getPlaylist(url);
                const videos = await playlist.getVideos();
                for (const video of Object.values(videos)) {
                    const video2 = await youtube.getVideoByID(video.id);
                    await handleVideo(video2, msg, voiceChannel, true);
                }
                return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
            } else {
                try {
                    var video = await youtube.getVideo(url);
                } catch (error) {
                    try {
                        var videos = await youtube.searchVideos(searchString, 10);
                        let index = 0;
                        msg.channel.send(`
__**Song selection:**__
${videos.map(video2 => `**${++index} -** ${video2.title}`).join('\n')}
Please provide a value to select one of the 🔎 results ranging from 1-10.
					`);
                        try {
                            var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
                                maxMatches: 1,
                                time: 10000,
                                errors: ['time']
                            });
                        } catch (err) {
                            console.error(err);
                            return msg.channel.send('No or invalid value entered, cancelling video selection.');
                        }
                        const videoIndex = parseInt(response.first().content);
                        var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send('🆘 I could not obtain any search results.');
                    }
                }
                return handleVideo(video, msg, voiceChannel);
            }
        }
        if (command === 'fav') {
            var url = favsong[args[1]] ? favsong[args[1]].replace(/<(.+)>/g, '$1') : '';
            console.log(favsong[args[1]]);
            console.log(" ")
            const voiceChannel = msg.member.voiceChannel;
            if (!voiceChannel) return msg.channel.send('I\'m sorry but you need to be in a voice channel to play music!');
            if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
                const playlist = await youtube.getPlaylist(url);
                const videos = await playlist.getVideos();
                for (const video of Object.values(videos)) {
                    const video2 = await youtube.getVideoByID(video.id);
                    await handleVideo(video2, msg, voiceChannel, true);
                }
                return msg.channel.send(`✅ Playlist: **${playlist.title}** has been added to the queue!`);
            } else {
                try {
                    var video = await youtube.getVideo(url);
                } catch (error) {
                    try {
                        msg.channel.send(`__**Song selection:**__\nPlease Choose a song on this list from 1-` + favsong.length + "\nSongs");
                        var songarnum = 1;
                        while (songarnum < favsong.length) {
                            msg.channel.send(songarnum + ". " + favsong[songarnum])
                            songarnum++
                        }
                    } catch (err) {
                        console.error(err);
                        return msg.channel.send('🆘 I could not obtain any search results.');
                    }
                }
                return handleVideo(video, msg, voiceChannel);
            }
        } else if (command === 'skip') {
            if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
            if (!serverQueue) return msg.channel.send('There is nothing playing that I could skip for you.');
            serverQueue.connection.dispatcher.end('Skip command has been used!');
            return undefined;
        } else if (command === 'stop') {
            if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
            if (!serverQueue) return msg.channel.send('There is nothing playing that I could stop for you.');
            serverQueue.songs = [];
            serverQueue.connection.dispatcher.end('Stop command has been used!');
            return undefined;
        } else if (command === 'volume') {
            if (!msg.member.voiceChannel) return msg.channel.send('You are not in a voice channel!');
            if (!serverQueue) return msg.channel.send('There is nothing playing.');
            if (!args[1]) return msg.channel.send(`The current volume is: **${serverQueue.volume}**`);
            serverQueue.volume = args[1];
            serverQueue.connection.dispatcher.setVolumeLogarithmic(args[1] / 5);
            return msg.channel.send(`I set the volume to: **${args[1]}**`);
        } else if (command === 'np') {
            if (!serverQueue) return msg.channel.send('There is nothing playing.');
            return msg.channel.send(`🎶 Now playing: **${serverQueue.songs[0].title}**`);
        } else if (command === 'queue') {
            if (!serverQueue) return msg.channel.send('There is nothing playing.');
            return msg.channel.send(`
__**Song queue:**__
${serverQueue.songs.map(song => `**-** ${song.title}`).join('\n')}
**Now playing:** ${serverQueue.songs[0].title}
		`);
        } else if (command === 'pause') {
            if (serverQueue && serverQueue.playing) {
                serverQueue.playing = false;
                serverQueue.connection.dispatcher.pause();
                return msg.channel.send('⏸ Paused the music for you!');
            }
            return msg.channel.send('There is nothing playing.');
        } else if (command === 'resume') {
            if (serverQueue && !serverQueue.playing) {
                serverQueue.playing = true;
                serverQueue.connection.dispatcher.resume();
                return msg.channel.send('▶ Resumed the music for you!');
            }
            return msg.channel.send('There is nothing playing.');
        }
        return undefined;
    }
});
async function handleVideo(video, msg, voiceChannel, playlist = false) {
    const serverQueue = queue.get(msg.guild.id);
    console.log(chalk.red("MOOOOSIK"));
    const song = {
        id: video.id,
        title: Util.escapeMarkdown(video.title),
        url: `https://www.youtube.com/watch?v=${video.id}`
    };
    if (!serverQueue) {
        const queueConstruct = {
            textChannel: msg.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 5,
            playing: true
        };
        queue.set(msg.guild.id, queueConstruct);
        queueConstruct.songs.push(song);
        try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(msg.guild, queueConstruct.songs[0]);
        } catch (error) {
            console.error(`I could not join the voice channel: ${error}`);
            queue.delete(msg.guild.id);
            return msg.channel.send(`I could not join the voice channel: ${error}`);
        }
    } else {
        serverQueue.songs.push(song);
        console.log(serverQueue.songs);
        if (playlist) return undefined;
        else return msg.channel.send(`✅ **${song.title}** has been added to the queue!`);
    }
    return undefined;
}

function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
        return;
    }
    console.log(serverQueue.songs);
    const dispatcher = serverQueue.connection.playStream(ytdl(song.url)).on('end', reason => {
        if (reason === 'Stream is not generating quickly enough.') console.log(reason);
        else console.log(reason);
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
    }).on('error', error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    serverQueue.textChannel.send(`🎶 Start playing: **${song.title}**`);
}
//Login
client.login(process.env.TOKEN);
