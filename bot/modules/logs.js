const bot = require('./../bot');
const spawn = require('child_process').spawn;
var pm2 = false;
const logsCh = "302242158512046090"
function startlog() {

    if (pm2 !== false) {
        console.log('pm2 logs process already started...');
        return;
    }
    start = false;

    pm2 = spawn('pm2', ['logs']);
    pm2.on('exit', (code, signal) => {
        console.log('PM2 EXIT');
    })

    pm2.stderr.on('data', (data) => {
        bot.channels.get(logsCh).send(data, { code:'xl', split: true });
    });

    pm2.stdout.on('data', (data) => {
        bot.channels.get(logsCh).send( data, { code:'xl', split: true });
    });

    return pm2;
};
bot.on('ready', () => {
    startlog();
    console.log("logs ready");
    bot.channels.get(logsCh).send('Bot Ready (pid: ' + process.pid + ')');
})
