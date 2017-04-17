const bot = require('./bot.js');
const settigns = require('./settings')
module.exports = (m) => {
    m.addRole(m.guild.roles.find("name", "Bug-Hunter"));
    if (settings.announcement && settings.announcement != "")
        return bot.channels.get(settings.announcement).sendMessage(m.user.toString() + " has been verified as a bug hunter")
}