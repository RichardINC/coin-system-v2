const { Client, Message, MessageEmbed} = require("discord.js");
let kullanamayanlar = {}

module.exports.execute = (client, message, args) => {
  if(kullanamayanlar[message.author.id]!=null) return dataBase.mesaj(message.channel, "Günlük "+ coinsistem.cashIsmi +"'ini almışsın!")

        const coins = Math.floor(Math.random() * 50000) + 1;
        message.channel.send(`${client.emojis.cache.get(emojis.cash)} | **${coins}${coinsistem.cashIsmi}** Kazandın Yarında Gelip Paranı Alabilrsin!`)
        dataBase.cashEkle(message.member, coins)
    kullanamayanlar[message.author.id]=1; 
        
    setTimeout(() => {
        kullanamayanlar[message.author.id]=null;
    }, 1000 * 60 * 60 * 24);


      };
module.exports.configuration = {
    name: "daily",
    aliases: ["günlük"],
    usage: "avatar [üye]",    
    description: "Belirtilen üyenin avatarını gösterir."
};

