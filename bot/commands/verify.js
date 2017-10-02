const userbot = require('./../lib/userbot');
const bot = require('./../bot');
const verify = require('./../lib/verify');
const reject = require('./../lib/reject');
const settings = require('./../../settings.json');
/**
 * This method should return the response directly to the channel
 * @param {*string array} params 
 * @param {*message} message
 */
async function command(params, message) {
    let mem = await userbot.guilds.get(settings['discord-testers']).fetchMember(message.author.id);
    message.delete(500);
    if (mem && mem.roles.get('197042209038663680')) {
        await verify(message);
    }
    else
        await reject(message);

}
/**
 * description of the command
 */
const description = "Adds the bug hunter role";
/**
 * Define Exports
 */
module.exports = {
    execute: command,
    description: description
};
