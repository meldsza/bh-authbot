# Bug Hunter Verification Project  
[![Build Status](https://travis-ci.com/meldsza/bh-authbot.svg?token=NCSPyosqnKLmRkQxpv8x&branch=master)](https://travis-ci.com/meldsza/bh-authbot)
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/meldsza/bh-authbot/tree/master)  
## Installation
### prerequisite
- Node 7.x
### Clone Repo
run `git clone git@github.com:meldsza/bh-authbot.git`
### Install dependencies
run `npm install`
### Getting the bot token
- Go to [https://discordapp.com/developers/applications/me](https://discordapp.com/developers/applications/me)
- Create an application
- Make a bot user
- Copy the token
- Add the bot to your guild using oauth
### Getting the User Token  
The bot uses a user bot to get information from other guilds(saves the trouble of asking the oauth user to add the bot). The bot user should NOT talk/type and should only be used to get information
- From either the web application, or the installed Discord app, use the CTRL+SHIFT+I keyboard shortcut.
- This brings up the Developer Tools. Go to the Application tab
- On the left, expand Local Storage, then click on the discordapp.com entry (it should be the only one).
- Locate the entry called token, and copy it.
### Installing the User Token  
The user token must be specified using environment variables
USER_BOT=TOKEN_HERE

### Installing the token
You can install the token into the bot in the following ways
- Adding it in the settings.json. 
just add a line in the settings.json
`"token":"TOKEN HERE"`
- Supply it in the environment variable
- Add it as argument
### The database
The database logs messages. To set it up just set the env variables DB_HOST and DB_PASS to your sql server configuration  
### Launching the bot
Just do
`node index.js`
if you are supplying the token as argument run
`node index TOKEN_HERE`
#### For more information, refer [https://github.com/meldsza/melbot.js/blob/master/README.md](https://github.com/meldsza/melbot.js/blob/master/README.md)

