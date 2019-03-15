const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
client.prefix = config.prefix;

client.on('ready', async () => {
  console.log('Bot iniciado');
  console.log(client.user.tag + " - " + client.user.guild.size + " servidores, " + client.user.users.size + " usuários");

  client.user.setActivity(client.prefix + "ajuda", { type: 'WATCHING' });
});


client.login(config.token);
