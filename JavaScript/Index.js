const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
client.prefix = config.prefix;

client.on('ready' async => {})

client.login(config.token);
