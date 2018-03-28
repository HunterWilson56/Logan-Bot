const Discord = require('discord.js');  
const bot = new Discord.Client();

bot.on('ready', () => {
    bot.user.setStatus('online');
   });

   bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.tag}!`);
  });

bot.on('message', (message) => {
    
    if(message.content == 'l.hi') {
        // Message.reply('pong');
        message.channel.send('Hello **Human**');
    }
    
});
    


bot.on('message', function(message) {
    if (message.content == "l.help") {
        message.channel.sendMessage({embed:{

    "title": "Help!",
    "description": "Hello! Thank you for activating my help protocol.\n (My Prefix is a lowercase l and a . `l.`) \n |if your wondering about Commands do `l.Commands`{The C is Capital!}|\n for other things join our support server >https://discord.gg/qQZa7ah or \n Contact Tea Cup#0001 \n \n  **Also For My Auto Welcome You Need To Make an channel named welcome and when ever someone joins i will welcome them!** ",
    "color": 1476585,
    "timestamp": new Date(),
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/398489037431898113/411628424646623242/8b3b31dd-0db9-4183-b656-e0d1989164e4.jpg",
      "text": "© Logan 2018",
}
        }})
    }
});

bot.on('message', message => {

    if (message.content == 'l.YT') {
         message.channel.send('This command will provide YouTube Commands |``l.YTC``|');
    }

});

bot.on('message', function(message) {
    if (message.content == "l.Commands") {
        message.channel.send({embed:{

            "title": "Commands",
            "description": "The Commands For Logan>>|``l.hi``|``l.invite``|``l.info``|``l.help``\n|``l.yt``|``l.games``|``l.suggest``|\n``l.level``|``l.ping``|``l.afk``|``l.web``|\n |``l.vote``|``l.stats``|``l.log``|``l.roll``|\n |``l.autow``|``l.moderaton``|``l.8ball``|\n |``l.say``| \n ***Level Commands*** |`l.level`|`l.points`|More Coming``",
            "color": 11284891,
        }})
    }

    if (message.content == "l.YTC") {
        message.channel.send({embed:{

            "title": "This command Will link you to Hunters Youtube",
            "description": "Youtube Channel https://www.youtube.com/channel/UC3b0KGYwku_iJ7_DREyPz9w",
            "color": 12406360,
        }})

}
    if (message.content == "l.invite") {
        message.channel.send({embed:{

            "title": "To Add Logan To Your Discord",
            "description": " [Click Here To Add](https://discordapp.com/oauth2/authorize?client_id=%20408070424484904960&scope=bot&permissions=2102525183)",
            "color": 2268623,
        }})
    }
});

bot.on('message', function(message) {
    if (message.content == "l.moderation") {
        message.channel.send({embed:{

    "title": "Modertion For Logan",
    "description": " Logans Moderation is undergoing matinice \nbut logan auto maticly deletes Explict/Cuss Word so if you dont want logan to do hat just take his manage permissions away ",
    "color": 16253959,
    "timestamp": new Date(),
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/398489037431898113/411628424646623242/8b3b31dd-0db9-4183-b656-e0d1989164e4.jpg",
      "text": "© Logan 2018",
}
        }})
    }
});

bot.on('message', function (message) {
	if (message.content.startsWith('l.8ball')) {
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
});
bot.on('message', function(message) {

	if (message.content.startsWith('l.say ')) {
		return message.channel.send(message.content.substring('!say '.length));
	}
})

