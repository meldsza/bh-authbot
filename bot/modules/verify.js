
const userbot = require('./userbot');
const bot = require('./../bot');
const verify = require('./../lib/verify');
const reject = require('./../lib/reject');
const Discord = require('discord.js');
const settings = require('./../../settings.json');
bot.on('guildMemberUpdate', (om, m) => {
    //if (m.guild.id != settings.bughunterGaming) return;
    if (om.roles.find('name', 'Member')) return;
    if (!m.roles.find('name', 'Member')) return;
    console.log(settings['discord-testers']);
    console.log(userbot.guilds.get(settings['discord-testers']).name);
    let mem = userbot.guilds.get(settings['discord-testers']).member(bot.users.get(m.user.id));
    if (mem && mem.roles.get('197042209038663680')) {
        console.log(m.user.username + ' is a bug hunter');
        verify(m);
    }
    else
        reject(m);
});
userbot.on('guildBanAdd', (guild, user) => {
    let mem = null;
    if (guild.id === settings['discord-testers'])
    { mem = bot.guilds.get(settings['bugHunterGaming']).member(user); }
    if (mem)
    {
        const embed = new Discord.RichEmbed();
        embed.setTitle("USER BANNED");
        embed.setAuthor(bot.user.username,bot.user.avatarURL);
        embed.setDescription("**"+user.username+"#"+user.discriminator+"** was banned.\n Reason: "+"Was banned on Discord-Testers. Will be unbanned when unbanned on Discord-Testers");
        mem.ban({reason:"Was banned on Discord-Testers. Will be unbanned when unbanned on Discord-Testers"}).then(()=>bot.channels.get(settings['logs']).sendEmbed(embed));
    }
})
userbot.on('guildBanRemove', (guild, user) => {
    
    const embed = new Discord.RichEmbed();
    embed.setTitle("USER UNBANNED");
    embed.setAuthor(bot.user.username,bot.user.avatarURL);
    embed.setDescription("**"+user.username+"#"+user.discriminator+"** was unbanned.\n Reason: "+"Was unbanned on Discord-Testers.");
    if (guild.id === settings['discord-testers'])
    { bot.guilds.get(settings['bugHunterGaming']).unban(user).then(()=>bot.channels.get(settings['logs']).sendEmbed(embed)); }
});

userbot.on('ready',()=>console.log("Selfbot ready"));
