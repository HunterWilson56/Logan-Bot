const Discord = require('discord.js');
const settings = require("../settings.json");
const Client = require('fortnite');
// Create an instance of the client with your API Key
const fortnite = new Client('7a8b8f15-a26d-4d43-b14f-d9d38e90c449');
module.exports.run = async (bot, message, args) => {

await message.delete()
  
  let username = args[0];
  let platform = args[1] || 'pc';
  if(!username) return message.reply("Please Give an Username ;)")
 
  let data = fortnite.user(username, platform).then(data => {
    console.log(data)
    let stats = data.stats;
    let lifetime = stats.lifetime
    console.log(lifetime)
    let score = lifetime[6] ['Score']
    console.log(score);
  });
  
const m = message.channel.send("Please Wait for this is under construction!")




}
//https://www.youtube.com/watch?v=M_UBbnR9M4Y <video im using