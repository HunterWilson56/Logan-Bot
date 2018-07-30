const reqEvent = (event) => require(`../events/${event}`)

module.exports = (client) => {

	
  
  client.on('messageDelete', reqEvent('messageDelete'));
	

/*
	client.on('guildBanAdd', reqEvent('guildBanAdd'));
	client.on('guildBanRemove', reqEvent('guildBanRemove'));
	client.on('roleCreate', reqEvent('roleCreate'));
	client.on('roleDelete', reqEvent('roleDelete'));
*/

};