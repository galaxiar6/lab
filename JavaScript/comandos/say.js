exports.run = async (client, message, args) => {

  let say = args.join(' ');
  if (!say) return message.channel.send("Por favor indique o que eu vou falar!");
  message.delete();
  message.channel.send(say);

}
