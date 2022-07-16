const { Discord, MessageEmbed } = require("discord.js");
const qdb = require('quick.db');
const mdb = new qdb.table("meslek");
module.exports.execute = async(client, message, args) => {
  let uye = message.guild.member(message.member);
  let meslek = await mdb.get(`meslek.${uye.id}`);
  const seviye1 = Math.floor(Math.random() * 10000) + 1;
  const seviye2 = Math.floor(Math.random() * 25000) + 1;

  if(!meslek) {dataBase.mesaj(message.channel, cevap.issiz);} else {

  if (meslek.is === "madenci") {
    if(meslek.seviye === 1) {
      message.channel.send(`Maden kazılıyor, **10 Dakika sonra** kazancını elde edebilirsin`).then(z => {
        setTimeout(function(){
            dataBase.cashEkle(uye, seviye1)
            z.edit(`Madencilik yaparak **10 dakikada** ${seviye1}${coinsistem.cashIsmi} kazandın!
*${system.prefix}work-shop ile geliştirmeler yaparak kazancını arttırabilirsin :3*`)
        },5000)
      })
    }
  }
}
};

module.exports.configuration = {
    name: "çalış",
    aliases: ["work", "w"],
    usage: "Taslak",
    description: "Taslak Komutu."
};