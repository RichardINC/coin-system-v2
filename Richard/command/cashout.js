const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(client, message, args) => {
  
    let kullanici = message.author;
    let uye = message.guild.member(kullanici);
   
    let bakiye = dataBase.cashOku(uye)
    if(bakiye < 1000) return dataBase.mesaj(message.channel, cevap.fakirsin)
    let bakiyem = bakiye / 1000;
    let cashout = Math.floor(bakiyem);

    dataBase.mesaj(message.channel, `${client.emojis.cache.get(emojis.bank)} Başarılı, hesabınızda bulunan **${bakiyem}${client.emojis.cache.get(emojis.cash)} \`=>\` ${cashout}${client.emojis.cache.get(emojis.coin)}** olarak çevirildi!`)
    dataBase.cashSil(uye, bakiye);
    dataBase.coinEkle(uye, cashout);
  };

module.exports.configuration = {
    name: "cashout",
    aliases: ["co", "bozdur", "çevir"],
    usage: "Taslak",
    description: "Taslak Komutu."
};