
/**
 * This method should return the response directly to the channel
 * @param {*string array} Params 
 * @param {*message} message
 */
async function command(params, message) {
    if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        await message.channel.send("You do not have permission to use this command.");
        return;
    }
    let r = message.guild.member(message.mentions.users.first()).highestRole;
    if (message.member.highestRole.comparePositionTo(r) <= 0)
        return await message.reply("You can not ban this person as his highest role than or equal to your highest role");
    await message.guild.member(message.mentions.users.first()).ban();
    return await message.channel.send(message.mentions.users.first().toString() + " has been banned by " + message.author.toString() + " for **(**`" + params.slice(1).join(' ') + "`**)**");
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
