const bot = require('./../bot.js');
const settings = require('./../../settings.json')
module.exports = (m) => {
    m.addRole(m.guild.roles.find('name','Verifying'));
    bot.channels.get(settings.announcement).sendMessage(m.user.toString() + ", You cannot be verified as a bug hunter automatically as you lack the bug hunter role in the discord-testers server. Please post a screenshot of yourself for the other bug hunters to see and verify you as a part of the team. You will be kicked if you are not verified within 10 minutes.");
    setTimeout(()=>{
        const mem = m.guild.member(m.user);
        if(!mem.roles.find('name','Bug-Hunter'))
            mem.kick().then(()=>{
                bot.channels.get(settings.announcement).sendMessage(m.user.toString() + " was kicked for not being a bug hunter");
            });
    },600000);
}
