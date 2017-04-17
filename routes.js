const app = require('./app');
const settings = require('./settings.json');
const verify = require('./verify');
const reject = require('./reject');
const request = require('request-promise-native');
app.get('/verify', function (req, res) {
    const applink = 'https://discordapp.com/oauth2/authorize?response_type=code&client_id=' + settings.clientID + '&scope=identify';
    const token_url = 'https://discordapp.com/api/oauth2/token';
    const code = req.query.code;
    if (!code)
        res.redirect(applink);//redirect to oauth if the code isnt present
    const form = {
        'client_id': settings.clientID,
        'client_secret': settings.client_secret,
        'code': code,
        'grant_type': 'authorization_code',
    };

    let token = await request({
        method: 'POST',
        form: form,
        uri: token_url
    });
    token = JSON.parse(token);
    token = token.access_token;//gets a temporary token to launch client as the user
    const c = new discord.Client();
    c.login(token);//makes a user bot using the token which we got from the code grant
    c.on('ready', () => {
        let g = c.guilds.get(settings['discord-testers']);
        if (!g)
            reject(c.user);
        let m = g.member(c.user);
        if (m.roles.find('name', 'Bug Hunter'))
            verify(c.guilds.get(settings.bugHunterGaming).member(c.user));
    });
    res.end('Done');
});