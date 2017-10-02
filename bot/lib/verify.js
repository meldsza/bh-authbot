const bot = require('./../bot.js');
const settings = require('./../../settings.json')
module.exports = async function (message) {
    await message.member.addRole(message.guild.roles.find("name", "Bug-Hunter"));
    let m = await message.reply("You have being added as a bug hunter");
    m.delete(5000);
}