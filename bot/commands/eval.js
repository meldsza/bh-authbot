const settings = require('./../../settings.json');
const bot = require('./../bot');
/**
 * This method should return the response directly to the channel
 * @param {*string array} params 
 * @param {*message} message
 */
async function command(params, message) {
  if (!settings.owners.includes(message.author.id)) {
        return await message.reply('Not worthy')
  }
  code = params.join(" ").trim();
	const time = process.hrtime();
	try {
		var evaled = eval(code);
		if (typeof evaled !== 'string')
			evaled = require('util').inspect(evaled);
		await message.channel.send("**Input**\n```JS\n" + code + "```\n**OUTPUT**\n```xl\n" +
			clean(evaled).replace(bot.token,"YOUCANTSEEMYTOKENFORAREASON") +
			"\n```\n**Execution Time**: " + (process.hrtime(time)[1]/1000000)+"ms"
			, { split: true })
	}
	catch (err) {
		await message.channel.send("**Input**\n```JS\n" + code + "```\n`ERROR` ```xl\n" +
			clean(err) + "\n```\n**Execution Time**: " + (process.hrtime(time)[1]/1000000) +
			"ms\n```", { split: true });
	}
}
function clean(text) {
	if (typeof (text) === "string") {
		return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203)).substr(0, 1980);
	}
	else {
		return text.toString().substr(0, 1980);
	}
}
/**
 * description of the command
 */
const description = "says hi";
/**
 * Define Exports
 */
module.exports = {
    execute: command,
    description: description
};
