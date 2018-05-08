loganweb
ShowLive


//Configuration
//Hopefully the website wont blot html pings
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
​
client.on("message", async message => {
    if (message.author.bot) return;
    if (message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
 /*    if (command === "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    } *///Hosted local by teacup
