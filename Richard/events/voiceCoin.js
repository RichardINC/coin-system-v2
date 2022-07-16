module.exports = () => {
   let guild = client.guilds.cache.get(sistem.server);
 	setInterval( async () => {
  let channels = guild.channels.cache.filter(channel => channel.type == "voice" && channel.members.size > 0);
  channels.forEach(channel => {
       let members = channel.members.filter(member => !member.user.bot);
      members.forEach(member => {
   databasem.coinEkle(member, coinsistem.odül.ses)
      });
  });
  }, coinsistem.kacmilisaniyesonra);
}

module.exports.config = {
    Event: "ready"
}