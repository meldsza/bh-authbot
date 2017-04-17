
const userbot = require('./userbot');
const bot = require('./../bot');
const verify = require('./../lib/verify');
const reject = require('./../lib/reject');
const settings = require('./../../settings.json');
bot.on('guildMemberUpdate', (om,m) => {
    //if (m.guild.id != settings.bughunterGaming) return;
    if(om.roles.find('name','Member'))return;
    if(!m.roles.find('name','Member'))return;
    console.log(settings['discord-testers']);
    console.log( userbot.guilds.get(settings['discord-testers']).name);
    let mem = userbot.guilds.get(settings['discord-testers']).member(bot.users.get(m.user.id));
    if (mem && mem.roles.find('name', 'Bug Hunter')) {
        console.log(m.user.username + ' is a bug hunter');
        verify(m);
    }
    else
        reject(m.user);
});
