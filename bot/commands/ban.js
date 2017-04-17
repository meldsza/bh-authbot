
/**
 * This method should return the response directly to the channel
 * @param {*string array} params 
 * @param {*message} message
 */
async function command(params, message) {
    if (!message.member.hasPermission("BAN_MEMBERS")) {
        await message.channel.sendMessage("You do not have permission to use this command.");
        return;
    }
    await message.guild.member(message.mentions.users.first()).kick();
    return await message.channel.sendMessage(message.mentions.users.first().toString() + " has been banned by " + message.author.toString() + " for " + params.join(' '));
}
/**
 * description of the command
 */
const description = "Bans a user from the server.";
/**
 * Define Exports
 */
module.exports = {
    execute: command,
    description: description
};
