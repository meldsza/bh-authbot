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
### Installing the token
You can install the token into the bot in the following ways
- Adding it in the settings.json. 
just add a line in the settings.json
`"token":"TOKEN HERE"`
- Supply it in the environment variable
- Add it as argument
### Launching the bot
Just do
`node index.js`
if you are supplying the token as argument run
`node index TOKEN_HERE`
#### For more information, refer [https://github.com/meldsza/melbot.js/blob/master/README.md](https://github.com/meldsza/melbot.js/blob/master/README.md)

