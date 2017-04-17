const settings = require('./../../settings.json');
/**
 * This method should return the response directly to the channel
 * @param {*string array} params 
 * @param {*message} message
 */
async function command(params, message) {
    if (settings.owners.includes(message.author.id)) {
       const exec = require('child_process').exec;
       exec(params.join(' '), (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                message.channel.sendCode("shell", '**ERROR** Shell-' + error + '\n' + stderr, { split: true });
                return;
            }
            console.log(`stdout: ${stdout}`);
            message.channel.sendCode("shell", stdout + { split: true });
            console.log(`stderr: ${stderr}`);
        });
    }
    else
        message.reply('Not worthy')
}
/**
 * description of the command
 */
const description = "executes a command (owners only)";
/**
 * Define Exports
 */
module.exports = {
    execute: command,
    description: description
};
