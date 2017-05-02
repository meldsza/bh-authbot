
const userbot = require('./userbot');
const bot = require('./../bot');
const verify = require('./../lib/verify');
const reject = require('./../lib/reject');
const settings = require('./../../settings.json');
bot.on('guildMemberUpdate', (om, m) => {
    //if (m.guild.id != settings.bughunterGaming) return;
    if (om.roles.find('name', 'Member')) return;
    if (!m.roles.find('name', 'Member')) return;
    console.log(settings['discord-testers']);
    console.log(userbot.guilds.get(settings['discord-testers']).name);
    let mem = userbot.guilds.get(settings['discord-testers']).member(bot.users.get(m.user.id));
    if (mem && mem.roles.get('197042209038663680')) {
        console.log(m.user.username + ' is a bug hunter');
        verify(m);
    }
    else
        reject(m);
});
userbot.on('guildBanAdd', (guild, user) => {
    let g = null;
    if (guild.id === settings['discord-testers'])
    { g = bot.guilds.get(settings['bugHunterGaming']); }
    if (g)
        g.channels.get("302182924642549771").sendMessage("!ban "+user.toString()+" -r Banned on Discord-Testers. Will be unbanned when unbanned on the D-Testers server");
})
userbot.on('guildBanRemove', (guild, user) => {
    let g = null;
    if (guild.id === settings['discord-testers'])
    { g = bot.guilds.get(settings['bugHunterGaming']); }
    if (g)
        g.channels.get("302182924642549771").sendMessage("!unban "+user.toString()+" -r unbanned on Discord-Testers.");
});

userbot.on('ready',()=>console.log("Selfbot ready"));
