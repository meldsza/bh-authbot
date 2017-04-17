
/**
 * This method should return the response directly to the channel
 * @param {*string array} params 
 * @param {*message} message
 */
const bot = require('./../bot');
async function command(params, message) {
    message.reply('pong in '+bot.ping);
}
/**
 * description of the command
 */
const description = "plays ping pong";
/**
 * Define Exports
 */
module.exports = {
    execute: command,
    description: description
};
