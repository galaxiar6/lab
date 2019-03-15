const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
client.prefix = config.prefix;



client.login(config.token);
