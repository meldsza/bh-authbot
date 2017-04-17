const Discord = require('discord.js');
const settings = require('./settings.json');

const client = new Discord.Client();

var dt = settings.token || process.argv[2];

if (!dt) {
    console.log('required token in settings.json or argument');
}

client.login(dt);

client.on('ready', () => {
    console.log('Discord bot ready... and logged in!');
});

module.exports = client;
