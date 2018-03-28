		const Discord = require('discord.js');
const bot = new Discord.Client();
const weather = require('weather-js'); // Make sure you call the packages you install.

// Global Settings
 

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
    
  const prefix = "l.";
  bot.on("message", (message) => {
    // our new check:
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    // [rest of the code]
  
    
    if(message.content == prefix +'hi') {
        // Message.reply('pong');
        message.channel.send('Hello **Human**');
    }
    

    if (message.content == prefix +"help") {
        message.channel.sendMessage({embed:{

    "title": "Help!",
    "description": "Hello Thank you for activating my help proticall\n (My Prefix is a lowercase l and a . `l.`) \n |if your wondering about Commands do `l.Commands`{The C is Capital!}|\n for other things join our support server >https://discord.gg/qQZa7ah or \n Contact Tea Cup#3343 \n \n  **Also For My Auto Welcome You Need To Make an channel named welcome and when ever someone joins i will welcome them!** ",
    "color": 1476585,
    "timestamp": new Date(),
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/398489037431898113/411628424646623242/8b3b31dd-0db9-4183-b656-e0d1989164e4.jpg",
      "text": "© Logan 2018",
}
        }})
    }


    if (message.content == prefix + 'YT') {
         message.channel.send('This command will provide YouTube Commands |``l.YTC``|');
    }


    

    if (message.content == prefix + "YTC") {
        message.channel.send({embed:{

            "title": "This command Will link you to Hunters Youtube",
            "description": "Youtube Channel https://www.youtube.com/channel/UC3b0KGYwku_iJ7_DREyPz9w",
            "color": 12406360,
        }})

}
    if (message.content == prefix + "invite") {
        message.channel.send({embed:{

            "title": "To Add Logan To Your Discord",
            "description": " [Click Here To Add](https://discordapp.com/oauth2/authorize?client_id=%20408070424484904960&scope=bot&permissions=2102525183)",
            "color": 2268623,
        }})

    }

    if (message.content == prefix + "log") {
        message.channel.send({embed:{

    "title": "This Is The Change & Update Logs",
    "description": "3/2.2018-Added Moderation For Inapropirte Words \n |End Of Log|",
    "color": 3658691,
    "timestamp": new Date(),
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/398489037431898113/411628424646623242/8b3b31dd-0db9-4183-b656-e0d1989164e4.jpg",
      "text": "© Logan 2018",
}
        }})
    }

    if (message.content == prefix + "games") {
        message.channel.send({embed:{

            "title": "Commands For Games",
            "description": "**__These Are The Games__** |``l.flip``|``l.hide``|~|more coming soon",
            "color": 1079907,
        }})
    }

    if (message.content ==  prefix +"flip") {
        var coin = Math.floor((Math.random() * 2) + 1);
        if (coin == 1) {
            message.channel.send("Heads")
        } else message.channel.send("Tails")
    }


    if (message.content == prefix + 'tea') {
        message.reply('Drink Tea ***Bish***');
    
    }



    if (message.content ==  prefix + 'hide') {
         message.channel.send('You **__Seek__** **While** i Hide');
    }



    if (message.content == 'You **__Seek__** **While** i Hide') {
         message.channel.send('Youll **__Never__** Find **Me** ops You Did i should never talk during Hide & go seek');
    }


	if (message.content === prefix + 'roll') {
		return message.channel.send(`You got a ${Math.floor((Math.random() * 6) + 1)}`);
	  }

    if (message.content == prefix +  "suggest") {
        message.channel.send({embed:{

            "title": "To Suggest Stuff Fo Logan",
            "description": " [Click Here To Suggest](https://discord.gg/qQZa7ah)",
            "color": 2268623,
        }})
    }

    if (message.content == prefix +  "info") {
        message.channel.send({embed:{

    "title": "info About Logan",
    "description": "This Bot Was Created on 1/28/18  by Tea Cup #3343 and \n Co-Created by Sup3rFir3#1633 \n Also Helped By Shaded#9211 \n\n ***FYI*** I have an auto welcome and for that do `l.autow`",
    "color": 3658691,
    "timestamp": new Date(),
    "footer": {
      "icon_url": "https://cdn.discordapp.com/attachments/398489037431898113/411628424646623242/8b3b31dd-0db9-4183-b656-e0d1989164e4.jpg",
      "text": "© Logan 2018",
}
        }})
    }


        if (message.content == prefix +  'afk') {
             message.channel.send('Your going afk? if so NO BODY BOTHER THIS DUDE!');
        }
    

        if (message.content == prefix +  "web") {
            message.channel.send({embed:{
    
        "title": "Logans Website Info",
        "color": 16253959,
        "description": "Look At Our Cool Website! [Go Here](https://loganbot.xyz/) ",
        "timestamp": new Date(),
        "footer": {
          "icon_url": "https://cdn.discordapp.com/attachments/398489037431898113/411628424646623242/8b3b31dd-0db9-4183-b656-e0d1989164e4.jpg",
          "text": "© Logan 2018",
    }
            }})
        }

        if (message.content == prefix +  "vote") {
            message.channel.send({embed:{
    
        "title": "To Vote For Logan",
        "description": "To Vote For Logan So We Can Grow! go [here](https://discordbots.org/bot/408070424484904960) ",
        "color": 16253959,
        "timestamp": new Date(),
        "footer": {
          "icon_url": "https://cdn.discordapp.com/attachments/398489037431898113/411628424646623242/8b3b31dd-0db9-4183-b656-e0d1989164e4.jpg",
          "text": "© Logan 2018",
    }
            }})
        }

        if (message.content == prefix + "autow") {
            message.channel.send({embed:{
    
        "title": "Auto Welcome!",
        "description": "Hi There! \n To set up my auto welcome read steps below!\n `1st- Create An Channel named 'welcome' then make sure i can post in it!`\n and you should be all setup\n For Any Question's Or Concerns Contact Tea Cup#3343!  ",
        "color": 16253959,
        "timestamp": new Date(),
        "footer": {
          "icon_url": "https://cdn.discordapp.com/attachments/398489037431898113/411628424646623242/8b3b31dd-0db9-4183-b656-e0d1989164e4.jpg",
          "text": "© Logan 2018",
    }
            }})
        }


    });
    
           // if (message.content.startsWith('l.8ball')) {

    





//Servers > ${bot.guilds.size} :greenTick: \n Users > ${bot.users.size} :greenTick:\n Uptiime > :soon~1: 
    bot.on("guildMemberAdd", (member) => {
        console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
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
		
		
// This is the prefix, you can change it to whatever you want.

// Listener Event: Runs whenever a message is received.
bot.on('message', message => {

    // Variables - Variables make it easy to call things, since it requires less typing.
    let msg = message.content.toUpperCase(); // This variable takes the message, and turns it all into uppercase so it isn't case sensitive.
    let sender = message.author; // This variable takes the message, and finds who the author is.
    let cont = message.content.slice(prefix.length).split(" "); // This variable slices off the prefix, then puts the rest in an array based off the spaces
    let args = cont.slice(1); // This slices off the command in cont, only leaving the arguments.

    // Commands

    // Ping
    if (msg === prefix + 'PING') { // This checks if msg (the message but in all caps), is the same as the prefix + the command in all caps.

        // Now, let's send a response.
        message.channel.send('Ping!'); // This 'sends' the message to the channel the message was in. You can change what is in the message to whatever you want.

    }

    // Purge
    if (msg.startsWith(prefix +  'PURGE')) { // This time we have to use startsWith, since we will be adding a number to the end of the command.
        // We have to wrap this in an async since awaits only work in them.
        async function purge() {
            message.delete(); // Lets delete the command message, so it doesnt interfere with the messages we are going to delete.

            // Now, we want to check if the user has the `bot-commander` role, you can change this to whatever you want.
            if (!message.member.roles.find("name", "Staff","Bot Developer")) { // This checks to see if they DONT have it, the "!" inverts the true/false
                message.channel.send('You need the \`Staff\` role to use this command.'); // This tells the user in chat that they need the role.
                return; // this returns the code, so the rest doesn't run.
            }

            // We want to check if the argument is a number
            if (isNaN(args[0])) {
                // Sends a message to the channel.
                message.channel.send('Please use a number as your arguments. \n Usage: ' + prefix + 'purge <amount>'); //\n means new line.
                // Cancels out of the script, so the rest doesn't run.
                return;
            }

            const fetched = await message.channel.fetchMessages({limit: args[0]}); // This grabs the last number(args) of messages in the channel.
            console.log(fetched.size + ' messages found, deleting...'); // Lets post into console how many messages we are deleting

            // Deleting the messages
            message.channel.bulkDelete(fetched)
                .catch(error => message.channel.send(`Error: ${error}`)); // If it finds an error, it posts it into the channel.

        }

        // We want to make sure we call the function whenever the purge command is run.
        purge(); // Make sure this is inside the if(msg.startsWith)

    }

    // Weather Command - We're going to need a new package for this, so open up the console again.
    // Lets make a basic version of this, then make it look good.

    if (msg.startsWith(prefix + 'WEATHER')) { // This checks to see if the beginning of the message is calling the weather command.
        // You can find some of the code used here on the weather-js npm page in the description.

        weather.find({search: args.join(" "), degreeType: 'F'}, function(err, result) { // Make sure you get that args.join part, since it adds everything after weather.
            if (err) message.channel.send(err);

            // We also want them to know if a place they enter is invalid.
            if (result.length === 0) {
                message.channel.send('**Please enter a valid location.**') // This tells them in chat that the place they entered is invalid.
                return; // This exits the code so the rest doesn't run.
            }

            // Variables
            var current = result[0].current; // This is a variable for the current part of the JSON output
            var location = result[0].location; // This is a variable for the location part of the JSON output

            // Let's use an embed for this.
            const embed = new Discord.RichEmbed()
                .setDescription(`**${current.skytext}**`) // This is the text of what the sky looks like, remember you can find all of this on the weather-js npm page.
                .setAuthor(`Weather for ${current.observationpoint}`) // This shows the current location of the weather.
                .setThumbnail(current.imageUrl) // This sets the thumbnail of the embed
                .setColor(0x00AE86) // This sets the color of the embed, you can set this to anything if you look put a hex color picker, just make sure you put 0x infront of the hex
                .addField('Timezone',`UTC${location.timezone}`, true) // This is the first field, it shows the timezone, and the true means `inline`, you can read more about this on the official discord.js documentation
                .addField('Degree Type',location.degreetype, true)// This is the field that shows the degree type, and is inline
                .addField('Temperature',`${current.temperature} Degrees`, true)
                .addField('Feels Like', `${current.feelslike} Degrees`, true)
                .addField('Winds',current.winddisplay, true)
                .addField('Humidity', `${current.humidity}%`, true)

                // Now, let's display it when called
                message.channel.send({embed});
        });
    }

});

// Listener Event: Runs whenever the bot sends a ready event (when it first starts for example)
bot.on('ready', () => {

    // We can post into the console that the bot launched.
    console.log('Bot started.');

});
	}
})

