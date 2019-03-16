const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();
client.prefix = config.prefix;

client.on('ready', async () => {
  console.log('Bot iniciado');
  console.log(client.user.tag + " - " + client.guild.size + " servidores, " + client.users.size + " usuários");
  client.user.setActivity(client.prefix + "ajuda", { type: 'WATCHING' });
});

client.on('message', async message => {
  if (message.author.bot) return undefined;
  if (message.channel.type === 'dm') return undefined;
  let msg = message.content.toLowerCase();
  
  if (msg.indexOf(client.prefix) !== 0) return undefined;
  const args = message.content.slice(client.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  try {
    delete require.cache[require.resolve(`./comandos/${comando}.js`)] 
    let command = require(`./comandos/${comando}.js`);
    command.run(client, message, args);
  } catch (e) {
   console.log(e);
  } finally {};
});

client.login(config.token);
