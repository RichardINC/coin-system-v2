
const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(client, message, args) => {
  let kullanici = message.author;
  let uye = message.guild.member(kullanici);
      let meslek = dataBase.meslekGor(uye);
      if(meslek) return dataBase.mesaj(message.channel, cevap.isli)
      let seçim = args[0];
      if(!seçim) return dataBase.mesaj(message.channel, "Kendine bir meslek seçmelisin! örn: Madenci")
      if(seçim === "Madenci") {
      dataBase.meslekKatil(uye, seçim)
      dataBase.mesaj(message.channel, "Madenci mesleğine katıldın,"+ system.prefix +"work ile çalışabilirsin!")
    }  
  };

module.exports.configuration = {
    name: "job",
    aliases: ["j"],
    usage: "Taslak",
    description: "Taslak Komutu."
};