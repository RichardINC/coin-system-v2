const { Discord, MessageEmbed } = require("discord.js");
module.exports.execute = async(client, message, args) => {
  
    let kullanici = message.author;
    let uye = message.guild.member(kullanici);
   
    let bakiye = dataBase.cashOku(uye)
    
    if(bakiye < 100) return dataBase.mesaj(message.channel, cevap.fakirlik)
    
  let colour = args[0];
  let money = parseInt(args[1]);
  
    if (!colour)  return dataBase.mesaj(message.channel, cevap.renksec);
    if(!args[1] && isNaN(args[0])) return dataBase.mesaj(message.channel, cevap.miktar)
    if(args[1] > bakiye) return dataBase.mesaj(message.channel, cevap.yetersiz)
    

  
    function isOdd(num) { 
      if ((num % 2) == 0) return false;
      else if ((num % 2) == 1) return true;
  }
      
  let random = Math.floor(Math.random() * 37);
      
      if (colour == "s" || colour.includes("Siyah") || colour.includes("siyah")) colour = 0;
      else if (colour == "k" || colour.includes("kırmızı") || colour.includes("Kırmızı")) colour = 1;
      else if (colour == "y" || colour.includes("yeşil") || colour.includes("Yeşil")) colour = 2;
      else return dataBase.mesaj(message.channel, cevap.renksec);
      
      let image = "https://media1.giphy.com/media/26uflBhaGt5lQsaCA/giphy.gif?cid=ecf05e47l75wzu2m2qfqtlnrhnuh0e1msmlf5tqzalaiytwr&rid=giphy.gif&ct=g"
      if(!args[1] && args[1] !== "all" && args[1] !== "hepsi") return dataBase.mesaj(message.channel, cevap.miktar)
      if (args[1] === "all") {
        let money = 50000;
          if(50000 > bakiye) return dataBase.mesaj(message.channel, cevap.yetersiz)
          if (random == 0 && colour == 2) { // YEŞİL
            money *= 15
            message.channel.send(`**${uye}** **${money}${coinsistem.cashIsmi}** ile rulet çeviriyor...`, image).then(z => {
                        setTimeout(function(){
                            z.edit(`*Yaşasınnn :3* **${uye}** **${money}${coinsistem.cashIsmi}** ile çevirdiği slottan \`%1 şans\` ile **yeşil renkten 15x **kazandı!`)
                        },3000)
                        dataBase.cashEkle(uye, money)
                    })
        } else if (isOdd(random) && colour == 1) { // KIRMIZI
            money = parseInt(money * 1.5)
  
            message.channel.send(`**${uye}** **${money}${coinsistem.cashIsmi}** ile rulet çeviriyor...`, image).then(z => {
              setTimeout(function(){
                          z.edit(`*Yaşasınnn :3* **${uye}** **${money}${coinsistem.cashIsmi}** ile çevirdiği slottan \`%30 şans\` ile **kırmızı renkten 1.5x **kazandı!`)
                      },3000)
                        dataBase.cashEkle(uye, money)
                    })      } else if (!isOdd(random) && colour == 0) {  // SİYAH
            money = parseInt(money * 2)
  
            message.channel.send(`**${uye}** **${money}${coinsistem.cashIsmi}** ile rulet çeviriyor...`, image).then(z => {
              setTimeout(function(){
                          z.edit(`*Yaşasınnn :3* **${uye}** **${money}${coinsistem.cashIsmi}** ile çevirdiği slottan \`%29 şans\` ile **siyah renkten 2x **kazandı!`)
                        },3000)
                        dataBase.cashEkle(uye, money)
                    })      } else { 
  
                      message.channel.send(`**${uye}** **${money}${coinsistem.cashIsmi}** ile rulet çeviriyor...`, image).then(z => {
                          setTimeout(function(){
                          z.edit(`*Ama yaa :3* **${uye}** **${money}${coinsistem.cashIsmi}** ile çevirdiği slottan \`%50 şans\` ile kaybetti!`)
                        },3000)
                        dataBase.cashSil(uye, money)
                    })      }  
      } else {
      if (random == 0 && colour == 2) { // YEŞİL
          money *= 15
          message.channel.send(`**${uye}** **${args[1]}${coinsistem.cashIsmi}** ile rulet çeviriyor...`, image).then(z => {
                      setTimeout(function(){
                          z.edit(`*Yaşasınnn :3* **${uye}** **${args[1]}${coinsistem.cashIsmi}** ile çevirdiği slottan \`%1 şans\` ile **yeşil renkten 15x** kazandı!`)
                      },3000)
                      dataBase.cashEkle(uye, money)
                  })
      } else if (isOdd(random) && colour == 1) { // KIRMIZI
          money = parseInt(money * 1.5)

          message.channel.send(`**${uye}** **${args[1]}${coinsistem.cashIsmi}** ile rulet çeviriyor...`, image).then(z => {
            setTimeout(function(){
                        z.edit(`*Yaşasınnn :3* **${uye}** **${args[1]}${coinsistem.cashIsmi}** ile çevirdiği slottan \`%30 şans\` ile **kırmızı renkten 1.5x** kazandı!`)
                    },3000)
                      dataBase.cashEkle(uye, money)
                  })      } else if (!isOdd(random) && colour == 0) {  // SİYAH
          money = parseInt(money * 2)

          message.channel.send(`**${uye}** **${args[10]}${coinsistem.cashIsmi}** ile rulet çeviriyor...`, image).then(z => {
            setTimeout(function(){
                        z.edit(`*Yaşasınnn :3* **${uye}** **${args[1]}${coinsistem.cashIsmi}** ile çevirdiği slottan \`%29 şans\` ile **siyah renkten 2x** kazandı!`)
                      },3000)
                      dataBase.cashEkle(uye, money)
                  })      } else { 

                    message.channel.send(`**${uye}** **${args[1]}${coinsistem.cashIsmi}** ile rulet çeviriyor...`, image).then(z => {
                        setTimeout(function(){
                        z.edit(`*Ama yaa :3* **${uye}** **${args[1]}${coinsistem.cashIsmi}** ile çevirdiği slottan \`%50 şans\` ile kaybetti!`)
                      },3000)
                      dataBase.cashSil(uye, money)
                  })      }
                }
  };

module.exports.configuration = {
    name: "roulette",
    aliases: ["rulet", "r"],
    usage: "Taslak",
    description: "Taslak Komutu."
};