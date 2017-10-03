const bot = require('./../bot.js');
const settings = require('./../../settings.json')
module.exports = async function (message) {
    let m;
    if(!message.member.roles.find("name", "Bug-Hunter"))
    {
        await message.member.addRole(message.guild.roles.find("name", "Bug-Hunter"));
        m = await message.reply("You have being added as a bug hunter");
    }
    else
        m= await message.reply("You are already a bug hunter");
    setTimeout(m.delete,5000);
}
