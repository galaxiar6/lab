exports.run = async (client, message, args) => {
  
 const Discord = require('discord.js');
 let m = await message.channel.send("Calculando `ping` . . .");
 
 let data_atual = Date.now();
 let heartbeat = (data_atual - message.createdTimestamp);
 let latency = Math.round(m.createdTimestamp - message.createdTimestamp);
 let api_latency = Math.round(client.ping);
 
 let embed = new Discord.RichEmbed()
 .setColor([54, 57, 63])
 .setTitle("🏓Pong!")
 .setAuthor(client.user.username, client.user.avatarURL)
 .addField("HeartBeat 💓", heartbeat + "ms", true)
 .addField("Latência 📡", latency + "ms", true)
 .addField("Latência da API 🔌", api_latency + "ms", true)
 .setTimestamp();
 
 m.edit(embed); 
  
}
