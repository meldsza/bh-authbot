const bot = require('./bot.js');
const settigns = require('./settings')
module.exports = (u) => {
    if (settings.announcement && settings.announcement != "")
        return bot.channels.get(settings.announcement).sendMessage(u.toString() + " cannot be verified as a bug hunter")
}