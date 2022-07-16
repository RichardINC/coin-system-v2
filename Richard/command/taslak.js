const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(client, message, args) => {
  

   if (!message.member.roles.cache.has(roles.baslangicpermi) && !message.member.hasPermission("ADMINISTRATOR")) return dataBase.embedOlustur(message.author, message.channel, `Bu komudu kullanmak için gerekli izinlere sahip değilsin.`, "RANDOM").then(x => x.delete({timeout: 10000}));
  
  dataBase.embedOlustur(message.author, message.channel, `mesaj`, "RANDOM")
  
  
  };

module.exports.configuration = {
    name: "taslak",
    aliases: ["Taslak"],
    usage: "Taslak",
    description: "Taslak Komutu."
};