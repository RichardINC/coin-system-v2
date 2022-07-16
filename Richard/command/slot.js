const { Discord, MessageEmbed } = require("discord.js");
const { parseZone } = require('moment');
module.exports.execute = async(client, message, args) => {     
    let kullanici = message.author;
    let uye = message.guild.member(kullanici);
   
    let bakiye = dataBase.cashOku(uye)
    if(bakiye < 100) return dataBase.mesaj(message.channel, cevap.fakirlik)
    
    if(!args[0] && isNaN(args[0])) return dataBase.mesaj(message.channel, cevap.miktar)
    if(args[0] > bakiye) return dataBase.mesaj(message.channel, cevap.yetersiz)
    
    const slots = [emojis.strawberry, emojis.pinapple, emojis.grapes, emojis.banana, emojis.apple, emojis.cherries];
    var ramo1 = slots[Math.floor(Math.random() * slots.length)];
    var ramo2 = slots[Math.floor(Math.random() * slots.length)];
    var ramo3 = slots[Math.floor(Math.random() * slots.length)];

////// kazanılan miktarlar
let kat3 = args[0]* 3;
let kat2 = args[0]* 2;
let kat5 = args[0]* 5;
////// kazanılan miktarlar

////// üstler ve altlar ve emojiler
var ust1 = slots[Math.floor(Math.random() * slots.length)];
var ust2 = slots[Math.floor(Math.random() * slots.length)];
var ust3 = slots[Math.floor(Math.random() * slots.length)];
var orta1 = slots[Math.floor(Math.random() * slots.length)];
var orta2 = slots[Math.floor(Math.random() * slots.length)];
var orta3 = slots[Math.floor(Math.random() * slots.length)];
var alt1 = slots[Math.floor(Math.random() * slots.length)];
var alt2 = slots[Math.floor(Math.random() * slots.length)];
var alt3 = slots[Math.floor(Math.random() * slots.length)];
////// üstler ve altlar ve emojiler

if(!args[0] && args[0] !== "all" && args[0] !== "hepsi") return dataBase.mesaj(message.channel, cevap.miktar)
if (args[0] === "all") {
    let money = 50000;
    if(50000 > bakiye) return dataBase.mesaj(message.channel, cevap.yetersiz)
    if (ramo1 === emojis.cherries && ramo1 === ramo2 && ramo2 === emojis.cherries &&  ramo3 === emojis.cherries && ramo1 === ramo3) {
        message.channel.send(`**${uye}** **${money}${coinsistem.cashIsmi}** ile ${client.emojis.cache.get(emojis.slot)} çeviriyor...
⬛${client.emojis.cache.get(ust1)}${client.emojis.cache.get(ust2)}${client.emojis.cache.get(ust3)}⬛
⏩${client.emojis.cache.get(orta1)}${client.emojis.cache.get(orta2)}${client.emojis.cache.get(orta3)}⏪
⬛${client.emojis.cache.get(alt1)}${client.emojis.cache.get(alt2)}${client.emojis.cache.get(alt3)}⬛`).then(z => {
            setTimeout(function(){
                z.edit(`*Yaşasınnn :3* **${uye}** **${kat5}${coinsistem.cashIsmi}** ile çevirdiği ${client.emojis.cache.get(emojis.slot)} kazandı!
⬛${client.emojis.cache.get(ust1)}${client.emojis.cache.get(ust2)}${client.emojis.cache.get(ust3)}⬛
⏩${client.emojis.cache.get(ramo1)}${client.emojis.cache.get(ramo2)}${client.emojis.cache.get(ramo3)}⏪
⬛${client.emojis.cache.get(alt1)}${client.emojis.cache.get(alt2)}${client.emojis.cache.get(alt3)}⬛`)
            },3000)
            dataBase.cashEkle(uye, money * 5)
        })
    } else if (ramo1 === emojis.banana && ramo1 === ramo2 && ramo2 === emojis.banana &&  ramo3 === emojis.banana && ramo1 === ramo3) {
        message.channel.send(`**${uye}** **${money}${coinsistem.cashIsmi}** ile ${client.emojis.cache.get(emojis.slot)} çeviriyor...
⬛${client.emojis.cache.get(ust1)}${client.emojis.cache.get(ust2)}${client.emojis.cache.get(ust3)}⬛
⏩${client.emojis.cache.get(orta1)}${client.emojis.cache.get(orta2)}${client.emojis.cache.get(orta3)}⏪
⬛${client.emojis.cache.get(alt1)}${client.emojis.cache.get(alt2)}${client.emojis.cache.get(alt3)}⬛`).then(z => {
            setTimeout(function(){
                z.edit(`*Yaşasınnn :3* **${uye}** **${kat2}${coinsistem.cashIsmi}** ile çevirdiği ${client.emojis.cache.get(emojis.slot)} kazandı!
⬛${client.emojis.cache.get(ust1)}${client.emojis.cache.get(ust2)}${client.emojis.cache.get(ust3)}⬛
⏩${client.emojis.cache.get(ramo1)}${client.emojis.cache.get(ramo2)}${client.emojis.cache.get(ramo3)}⏪
⬛${client.emojis.cache.get(alt1)}${client.emojis.cache.get(alt2)}${client.emojis.cache.get(alt3)}⬛`)
            },3000)
            dataBase.cashEkle(uye, money * 2)
        })
    } else  if (ramo1 === emojis.pinapple && ramo1 === ramo2 && ramo2 === emojis.pinapple &&  ramo3 === emojis.pinapple && ramo1 === ramo3) {
        message.channel.send(`**${uye}** **${money}${coinsistem.cashIsmi}** ile ${client.emojis.cache.get(emojis.slot)} çeviriyor...
⬛${client.emojis.cache.get(ust1)}${client.emojis.cache.get(ust2)}${client.emojis.cache.get(ust3)}⬛
⏩${client.emojis.cache.get(orta1)}${client.emojis.cache.get(orta2)}${client.emojis.cache.get(orta3)}⏪
⬛${client.emojis.cache.get(alt1)}${client.emojis.cache.get(alt2)}${client.emojis.cache.get(alt3)}⬛`).then(z => {
            setTimeout(function(){
                z.edit(`*Yaşasınnn :3* **${uye}** **${kat3}${coinsistem.cashIsmi}** ile çevirdiği ${client.emojis.cache.get(emojis.slot)} kazandı!
⬛${client.emojis.cache.get(ust1)}${client.emojis.cache.get(ust2)}${client.emojis.cache.get(ust3)}⬛
⏩${client.emojis.cache.get(ramo1)}${client.emojis.cache.get(ramo2)}${client.emojis.cache.get(ramo3)}⏪
⬛${client.emojis.cache.get(alt1)}${client.emojis.cache.get(alt2)}${client.emojis.cache.get(alt3)}⬛`)
            },3000)
            dataBase.cashEkle(uye, money * 3)
        })
    } else {
        message.channel.send(`**${uye}** **${money}${coinsistem.cashIsmi}** ile ${client.emojis.cache.get(emojis.slot)} çeviriyor...
⬛${client.emojis.cache.get(ust1)}${client.emojis.cache.get(ust2)}${client.emojis.cache.get(ust3)}⬛
⏩${client.emojis.cache.get(orta1)}${client.emojis.cache.get(orta2)}${client.emojis.cache.get(orta3)}⏪
⬛${client.emojis.cache.get(alt1)}${client.emojis.cache.get(alt2)}${client.emojis.cache.get(alt3)}⬛`).then(z => {
            setTimeout(function(){
                z.edit(`*Ama yaaa :(* **${uye}** **${money}${coinsistem.cashIsmi}** ile çevirdiği ${client.emojis.cache.get(emojis.slot)} kaybetti!
⬛${client.emojis.cache.get(ust1)}${client.emojis.cache.get(ust2)}${client.emojis.cache.get(ust3)}⬛
⏩${client.emojis.cache.get(ramo1)}${client.emojis.cache.get(ramo2)}${client.emojis.cache.get(ramo3)}⏪
⬛${client.emojis.cache.get(alt1)}${client.emojis.cache.get(alt2)}${client.emojis.cache.get(alt3)}⬛`)
            },3000)
            dataBase.cashSil(uye, money)
        })
    }  

} else {
    if (ramo1 === emojis.cherries && ramo1 === ramo2 && ramo2 === emojis.cherries &&  ramo3 === emojis.cherries && ramo1 === ramo3) {
        message.channel.send(`**${uye}** **${args[0]}${coinsistem.cashIsmi}** ile ${client.emojis.cache.get(emojis.slot)} çeviriyor...
⬛${client.emojis.cache.get(ust1)}${client.emojis.cache.get(ust2)}${client.emojis.cache.get(ust3)}⬛
⏩${client.emojis.cache.get(orta1)}${client.emojis.cache.get(orta2)}${client.emojis.cache.get(orta3)}⏪
⬛${client.emojis.cache.get(alt1)}${client.emojis.cache.get(alt2)}${client.emojis.cache.get(alt3)}⬛`).then(z => {
            setTimeout(function(){
                z.edit(`*Yaşasınnn :3* **${uye}** **${kat5}${coinsistem.cashIsmi}** ile çevirdiği ${client.emojis.cache.get(emojis.slot)} kazandı!
⬛${client.emojis.cache.get(ust1)}${client.emojis.cache.get(ust2)}${client.emojis.cache.get(ust3)}⬛
⏩${client.emojis.cache.get(ramo1)}${client.emojis.cache.get(ramo2)}${client.emojis.cache.get(ramo3)}⏪
⬛${client.emojis.cache.get(alt1)}${client.emojis.cache.get(alt2)}${client.emojis.cache.get(alt3)}⬛`)
            },3000)
            dataBase.cashEkle(uye, args[0] * 5)
        })
    } else if (ramo1 === emojis.banana && ramo1 === ramo2 && ramo2 === emojis.banana &&  ramo3 === emojis.banana && ramo1 === ramo3) {
        message.channel.send(`**${uye}** **${args[0]}${coinsistem.cashIsmi}** ile ${client.emojis.cache.get(emojis.slot)} çeviriyor...
⬛${client.emojis.cache.get(ust1)}${client.emojis.cache.get(ust2)}${client.emojis.cache.get(ust3)}⬛
⏩${client.emojis.cache.get(orta1)}${client.emojis.cache.get(orta2)}${client.emojis.cache.get(orta3)}⏪
⬛${client.emojis.cache.get(alt1)}${client.emojis.cache.get(alt2)}${client.emojis.cache.get(alt3)}⬛`).then(z => {
            setTimeout(function(){
                z.edit(`*Yaşasınnn :3* **${uye}** **${kat2}${coinsistem.cashIsmi}** ile çevirdiği ${client.emojis.cache.get(emojis.slot)} kazandı!
⬛${client.emojis.cache.get(ust1)}${client.emojis.cache.get(ust2)}${client.emojis.cache.get(ust3)}⬛
⏩${client.emojis.cache.get(ramo1)}${client.emojis.cache.get(ramo2)}${client.emojis.cache.get(ramo3)}⏪
⬛${client.emojis.cache.get(alt1)}${client.emojis.cache.get(alt2)}${client.emojis.cache.get(alt3)}⬛`)
            },3000)
            dataBase.cashEkle(uye, args[0] * 2)
        })
    } else  if (ramo1 === emojis.pinapple && ramo1 === ramo2 && ramo2 === emojis.pinapple &&  ramo3 === emojis.pinapple && ramo1 === ramo3) {
        message.channel.send(`**${uye}** **${args[0]}${coinsistem.cashIsmi}** ile ${client.emojis.cache.get(emojis.slot)} çeviriyor...
⬛${client.emojis.cache.get(ust1)}${client.emojis.cache.get(ust2)}${client.emojis.cache.get(ust3)}⬛
⏩${client.emojis.cache.get(orta1)}${client.emojis.cache.get(orta2)}${client.emojis.cache.get(orta3)}⏪
⬛${client.emojis.cache.get(alt1)}${client.emojis.cache.get(alt2)}${client.emojis.cache.get(alt3)}⬛`).then(z => {
            setTimeout(function(){
                z.edit(`*Yaşasınnn :3* **${uye}** **${kat3}${coinsistem.cashIsmi}** ile çevirdiği ${client.emojis.cache.get(emojis.slot)} kazandı!
⬛${client.emojis.cache.get(ust1)}${client.emojis.cache.get(ust2)}${client.emojis.cache.get(ust3)}⬛
⏩${client.emojis.cache.get(ramo1)}${client.emojis.cache.get(ramo2)}${client.emojis.cache.get(ramo3)}⏪
⬛${client.emojis.cache.get(alt1)}${client.emojis.cache.get(alt2)}${client.emojis.cache.get(alt3)}⬛`)
            },3000)
            dataBase.cashEkle(uye, args[0] * 3)
        })
    } else {
        message.channel.send(`**${uye}** **${args[0]}${coinsistem.cashIsmi}** ile ${client.emojis.cache.get(emojis.slot)} çeviriyor...
⬛${client.emojis.cache.get(ust1)}${client.emojis.cache.get(ust2)}${client.emojis.cache.get(ust3)}⬛
⏩${client.emojis.cache.get(orta1)}${client.emojis.cache.get(orta2)}${client.emojis.cache.get(orta3)}⏪
⬛${client.emojis.cache.get(alt1)}${client.emojis.cache.get(alt2)}${client.emojis.cache.get(alt3)}⬛`).then(z => {
            setTimeout(function(){
                z.edit(`*Ama yaaa :(* **${uye}** **${args[0]}${coinsistem.cashIsmi}** ile çevirdiği ${client.emojis.cache.get(emojis.slot)} kaybetti!
⬛${client.emojis.cache.get(ust1)}${client.emojis.cache.get(ust2)}${client.emojis.cache.get(ust3)}⬛
⏩${client.emojis.cache.get(ramo1)}${client.emojis.cache.get(ramo2)}${client.emojis.cache.get(ramo3)}⏪
⬛${client.emojis.cache.get(alt1)}${client.emojis.cache.get(alt2)}${client.emojis.cache.get(alt3)}⬛`)
            },3000)
            dataBase.cashSil(uye, args[0])
        })
    }  
  }
  };

module.exports.configuration = {
    name: "slot",
    aliases: ["s"],
    usage: "Taslak",
    description: "Taslak Komutu."
};
