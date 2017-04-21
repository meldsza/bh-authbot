require('./index');
const bot = requie('./bot/bot');
bot.on('ready',()=>process.exit());
