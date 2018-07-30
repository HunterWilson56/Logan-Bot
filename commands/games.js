const Discord = require('discord.js');
const settings = require("../settings.json");
module.exports.run = async (bot, message, args) => {
   
    message.channel.send({embed:{

        "title": "Commands For Games",
        "description": "**__These Are The Games__** |``l.flip``|``l.hide``|``l.quiz``|~|more coming soon",
        "color": 1079907,
    }})
}