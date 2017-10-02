const Discord = require('discord.js');
const settings = require('./../../settings.json');
const client = new Discord.Client();

var dt = process.env.USER_BOT;

if (!dt) {
    console.log('required USER_BOT env variable or argument');
}

client.login(dt);

client.on('error', e => {
    console.error(e);
});

module.exports = client;