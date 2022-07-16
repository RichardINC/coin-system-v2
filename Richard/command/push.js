const { Client, Message, MessageEmbed} = require("discord.js");
const coinIsmi = coinsistem.coinIsmi
const cashIsmi = coinsistem.cashIsmi
module.exports.execute = (client, message, args) => {
  if(message.author.id !== system.owner) return 
  let kullanici = message.mentions.users.first() || client.users.cache.get(args[2]) || (args.length > 0 ? client.users.cache.filter(e => e.username.toLowerCase().includes(args.join(" ").toLowerCase())).first(): message.author) || message.author;
  const coins = args[3];
  if(args[1] !== "ekle" && args[1] !== "sil") return dataBase.embedHata(message.author, message.channel, `Komutu doğru kullanmalısın. \`${system.prefix}push coin/cash ekle/sil <@Richârd/ID> <Miktar>\``).then(x => x.delete({timeout: 5000}));
  let uye = message.guild.member(kullanici);
  if(!uye && !coins) return dataBase.embedHata(message.author, message.channel, 'Komutu doğru kullanmalısın. \`'+ system.prefix +'push coin/cash ekle/sil <@Richârd/ID> <Miktar>\`').then(x => x.delete({timeout: 5000}));    

  if (args[0] === "coin") 
  {
            if(args[1] === "ekle") {
      if(!uye && !coins) return dataBase.embedHata(message.author, message.channel, 'Komutu doğru kullanmalısın. \`'+ system.prefix +'push coin/cash ekle/sil <@Richârd/ID> <Miktar>\`').then(x => x.delete({timeout: 5000}));    
            dataBase.mesaj(message.channel, `${message.member}, ${uye} kişisine **${coins} ${coinIsmi}** başarıyla eklendi!`)
            dataBase.coinEkle(uye, coins)
            message.react(emojis.onay)
  };

if(args[1] === "sil") { 
      if(!uye && !coins) return dataBase.embedHata(message.author, message.channel, 'Komutu doğru kullanmalısın. \`'+ sistem.prefix +'push coin/cash ekle/sil <@Richârd/ID> <Miktar>\`').then(x => x.delete({timeout: 5000}));    
           dataBase.embedBasari(message.author, message.channel, coins)
            message.react(emojis.onay)
}

}
  if (args[0] === "cash") {

    if(args[1] === "ekle") {
        if(!uye && !coins) return dataBase.embedHata(message.author, message.channel, 'Komutu doğru kullanmalısın. \`'+ system.prefix +'push coin/cash ekle/sil <@Richârd/ID> <Miktar>\`').then(x => x.delete({timeout: 5000}));    
              dataBase.mesaj(message.channel, `${message.member}, ${uye} kişisine **${coins} ${cashIsmi}** başarıyla eklendi!`)
              dataBase.cashEkle(uye, coins)
              message.react(emojis.onay)
    };

  if(args[1] === "sil") {
        if(!uye && !coins) return dataBase.embedHata(message.author, message.channel, 'Komutu doğru kullanmalısın. \`'+ sistem.prefix +'push coin/cash ekle/sil <@Richârd/ID> <Miktar>\`').then(x => x.delete({timeout: 5000}));    
              dataBase.mesaj(message.channel, `${message.member}, ${uye} kişisinden **${coins} ${cashIsmi}** başarıyla eksiltildi!`)
              dataBase.cashSil(uye, coins)
              message.react(emojis.onay)
    };

}
      };
module.exports.configuration = {
    name: "push",
    aliases: ["push"],
    usage: "avatar [üye]",    
    description: "Belirtilen üyenin avatarını gösterir."
};

