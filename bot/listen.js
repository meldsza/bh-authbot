const bot = require('./bot.js');
const settings = require('./../settings.json');
const modules = require('./modules.js');
const commands = require('./commands');
const Message = require('./../orm/discord_messages');
let lock = false;
bot.on('error', (err) => {
    /**
     * Catch errors here
     */
    console.log(new Date.now() + " - Error: " + err);
    console.log("Stack Trace: " + err.stack);
})
bot.on('message', (message) => {
    /**
     * if locked, reject everything except dm
     */
    new Message({
        author: message.author.id,
        messageID: message.id,
        channel: message.channel.id,
        text: message.content
    }).save();
    if (lock) {
        if (!settings.owners.includes(message.author.id))
            if (message.channel.guild)
                return;//not DM
    }
    if(message.author.bot) return;//no bots please
    /**
     * Listen to messages and convert into params
     */
    if (message.content.startsWith(settings.identifier)) {
        /**Extracting params */
        let params = message.content.substring(settings.identifier.length).trim();
        params = params.split(settings.delimiter || ' ');
        let cmd = params.shift().trim();
        commands.execute(cmd.toLowerCase(), params, message)
    }
    else {
        //ignore because normal message
    }
});
bot.on('lock', () => { lock = true; });
bot.on('unlock', () => { lock = false; });
bot.on('messageDelete', async function (message) {
    const m = await Message.where('messageID', message.id).fetchAll();
    //console.log(m)
    m.last().save({ deleted: true }, { patch: true });

});
bot.on('messageUpdate', (oldMessage, message) => {
    new Message({
        author: message.author.id,
        messageID: message.id,
        channel: message.channel.id,
        text: message.content
    }).save();

});
process.on('unhandledRejection', (err) => {
    console.log("UNHANDLED REJECTION AT " + err.stack);
    if (err.toString().includes('Request to use token, but token was unavailable to the client'))
        process.exit();//restart
});
process.on('uncaughtException', (err) => console.log("UNHANDLED EXCEPTION AT " + err.stack));
