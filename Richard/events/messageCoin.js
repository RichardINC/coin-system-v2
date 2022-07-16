const { Message, MessageEmbed } = require("discord.js");
const veriler = new Map();

module.exports = async (message) => {
 databasem.mesajEkle(message.member);
    let kontrol = databasem.mesajKontrol(message.member);
    if(kontrol >= coinsistem.kacmesajdabir) {
    databasem.mesajSil(message.member);
    databasem.coinEkle(message.member, coinsistem.odül.mesaj)
   }
}

module.exports.config = {
    Event: "message"
}