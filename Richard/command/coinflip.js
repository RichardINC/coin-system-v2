const { Discord, MessageEmbed } = require("discord.js");
const { parseZone } = require('moment');
module.exports.execute = async(client, message, args) => {     
    let kullanici = message.author;
    let uye = message.guild.member(kullanici);
   
    const slots = ['🍌', '🍎'];
    var ramo1 = slots[Math.floor(Math.random() * slots.length)];

    let bakiye = dataBase.coinOku(uye)
    if(bakiye < 100) return dataBase.mesaj(message.channel, cevap.fakir)
    if(args[0] > 50000) return dataBase.mesaj(message.channel, cevap.miktar)
    
    if(!args[0] && args[0] !== "all" && args[0] !== "hepsi") return dataBase.mesaj(message.channel, cevap.miktar)
    if (args[0] === "all") {
        if(50000 > bakiye) return dataBase.mesaj(message.channel, cevap.yetersiz)
        if (ramo1 === "🍌") {
            message.channel.send(`**${uye}** **50000${coinsistem.coinIsmi}** ile ${client.emojis.cache.get(emojis.coinflip)} çeviriyor...`).then(z => {
                setTimeout(function(){
                    z.edit(`**${uye}** **50000${coinsistem.coinIsmi}** ile ${client.emojis.cache.get(emojis.coin)} çevirildi...
*Yeeeeyyy :>* Yatırdığın paranın 2 katını kazandın!`)
                },3000)
                dataBase.coinEkle(uye, 50000 * 2)
            })
        } else if (ramo1 === "🍎") {
            message.channel.send(`**${uye}** **50000${coinsistem.coinIsmi}** ile ${client.emojis.cache.get(emojis.coinflip)} çeviriyor...`).then(z => {
                setTimeout(function(){
                    z.edit(`**${uye}** **50000${coinsistem.coinIsmi}** ile ${client.emojis.cache.get(emojis.coin)} çevirildi...
*Hayıırrr :c* Yatırdığın paranın tamamını kaybettin!`)
                },3000)
                dataBase.coinSil(uye, 50000)
            })
        }
    } else if (args[0] === "hepsi") {
        if(50000 > bakiye) return dataBase.mesaj(message.channel, cevap.yetersiz)
        if (ramo1 === "🍌") {
            message.channel.send(`**${uye}** **50000${coinsistem.coinIsmi}** ile ${client.emojis.cache.get(emojis.coinflip)} çeviriyor...`).then(z => {
                setTimeout(function(){
                    z.edit(`**${uye}** **50000${coinsistem.coinIsmi}** ile ${client.emojis.cache.get(emojis.coin)} çevirildi...
*Yeeeeyyy :>* Yatırdığın paranın 2 katını kazandın!`)
                },3000)
                dataBase.coinEkle(uye, 50000 * 2)
            })
        } else if (ramo1 === "🍎") {
            message.channel.send(`**${uye}** **50000${coinsistem.coinIsmi}** ile ${client.emojis.cache.get(emojis.coinflip)} çeviriyor...`).then(z => {
                setTimeout(function(){
                    z.edit(`**${uye}** **50000${coinsistem.coinIsmi}** ile ${client.emojis.cache.get(emojis.coin)} çevirildi...
*Hayıırrr :c* Yatırdığın paranın tamamını kaybettin!`)
                },3000)
                dataBase.coinSil(uye, 50000)
            })
        }
    } else {
    if(isNaN(args[0])) return dataBase.mesaj(message.channel, cevap.miktar)
    if(args[0] > bakiye) return dataBase.mesaj(message.channel, message.channel, cevap.yetersiz)
    
    if (ramo1 === "🍌") {
        message.channel.send(`**${uye}** **${args[0]}${coinsistem.coinIsmi}** ile ${client.emojis.cache.get(emojis.coinflip)} çeviriyor...`).then(z => {
            setTimeout(function(){
                z.edit(`**${uye}** **${args[0]}${coinsistem.coinIsmi}** ile ${client.emojis.cache.get(emojis.coin)} çevirildi...
*Yeeeeyyy :>* Yatırdığın paranın 2 katını kazandın!`)
            },3000)
            dataBase.coinEkle(uye, args[0] * 2)
        })
    } else if (ramo1 === "🍎") {
        message.channel.send(`**${uye}** **${args[0]}${coinsistem.coinIsmi}** ile ${client.emojis.cache.get(emojis.coinflip)} çeviriyor...`).then(z => {
            setTimeout(function(){
                z.edit(`**${uye}** **${args[0]}${coinsistem.coinIsmi}** ile ${client.emojis.cache.get(emojis.coin)} çevirildi...
*Hayıırrr :c* Yatırdığın paranın tamamını kaybettin!`)
            },3000)
            dataBase.coinSil(uye, args[0])
        })
    }
}
  };

module.exports.configuration = {
    name: "coinflip",
    aliases: ["cf"],
    usage: "Taslak",
    description: "Taslak Komutu."
};
