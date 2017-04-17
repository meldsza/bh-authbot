const discord_testers = "197038439483310086";
const bughunterGaming = "302180260424974336";
const userbot = require('./userbot');
const bot = require('./../bot');
const verify = require('./../lib/verify');
const reject = require('./../lib/reject');
const settings = require('./../../settings.json');
bot.on('guildMemberAdd', (m) => {
    if (m.guild.id != bughunterGaming) return;
    let mem = userbot.guilds.get(settings['discord-testers']).member(m.user);
    if (mem && mem.roles.find('name', 'Bug hunter')) {
        console.log(m.author.username + ' is a bug hunter');
        verify(m);
    }
    else
        reject(m.user);
});
