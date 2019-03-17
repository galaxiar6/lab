exports.run = (client, message, args) => {

 if (message.author.id !== "ID Do Dono") return message.channel.send("⛔ **ACCESS DENIED**");//caso se não for a pessoa que tem o ID colocado acima, ele iriar a retornar a mensagem (Access Denied)

 try {
 delete require.cache[require.resolve(`./${args[0]}.js`)];
 } catch (e) { //NÃO MODIFIQUE ISSO!

 return message.channel.send(`**Erro ao recarregar: ${args[0]}.js**`);
 }

 message.channel.send(`**Sucesso ao recarregar:** ${args[0]}.js`);


}
