const bot = require('./../bot.js');
const settings = require('./../../settings.json')
module.exports = async function (message) {
    let m = await message.reply("Sorry, but you cannot be added as a bug hunter because you lack the role in discord testers server");
    setTimeout(() => m.delete().catch(e => m.channel.send(e, { code: 'xl' })), 5000);
}
