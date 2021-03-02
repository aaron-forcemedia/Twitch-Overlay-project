const tmi = require('tmi.js');

const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: 'awlurch ',
		password: 'oauth:jruce8hhvgw0yoyvj83oginniex0q2'
	},
	channels: [ 'awlurch' ]
});
client.connect().catch(console.error);
client.on('message', (channel, tags, message, self) => {
	if(self) return;
	console.log(channel, message, tags, self);
    if(message.toLowerCase() === '!hello') {
		client.say(channel, `@${tags.username}, heya!`);
	}
});