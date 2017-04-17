
const userbot = require('./userbot');
const bot = require('./../bot');
const verify = require('./../lib/verify');
const reject = require('./../lib/reject');
const settings = require('./../../settings.json');
bot.on('guildMemberAdd', (m) => {
    if (m.guild.id != bughunterGaming) return;
    console.log(settings['discord-testers']);
    console.log( userbot.guilds.get(settings['discord-testers']).name);
    let mem = userbot.guilds.get(settings['discord-testers']).member(bot.users.get(m.user.id));
    if (mem && mem.roles.find('name', 'Bug Hunter')) {
        console.log(m.author.username + ' is a bug hunter');
        verify(m);
    }
    else
        reject(m.user);
});
