const bot = require('./../bot.js');
const settings = require('./../../settings.json')
module.exports = (u) => {
    if (settings.announcement && settings.announcement != "")
        return bot.channels.get(settings.announcement).sendMessage(u.toString() + " cannot be verified as a bug hunter")
}