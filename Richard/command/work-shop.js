const { Discord, MessageEmbed } = require("discord.js");
const qdb = require('quick.db');
const mdb = new qdb.table("meslek");
const table = require("table");
module.exports.execute = async(client, message, args) => {
  let uye = message.guild.member(message.member);
  let meslek = await mdb.get(`meslek.${uye.id}`);
  const seviye1 = Math.floor(Math.random() * 10000) + 1;
  const seviye2 = Math.floor(Math.random() * 25000) + 1;

  if(!meslek) {dataBase.mesaj(message.channel, cevap.issiz);} else {

    if(!coinsistem.sistem) return; 
    let kullanici = message.author;
    let uye = message.guild.member(kullanici);
    let puansorgu = dataBase.cashOku(uye)
    let urundata = coinsistem.Güçlendirebilirler;
    var filter = msj => msj.author.id === message.author.id && msj.author.id !== client.user.id;
    let urunler = [["ID", "Ürün İsmi", "Ürün Detayı" ,"Ürün Fiyatı"]];
  urunler = urunler.concat(urundata.map(value => { 
         let urunfiyatioku = `${value.urunFiyati} 💵`	
           return [
          `#${value.Id}`,
          `${value.urunAdi}`,
          `${value.urunDetayi}`,
          `${urunfiyatioku}`,
        ]
    }))
    let ürünler = message.channel.wsend(new MessageEmbed().setColor("RANDOM").setAuthor(message.member.displayName, message.guild.iconURL({dynamic: true, size: 2048})).addField(`${client.emojis.cache.get(emojis.cash)} Meslek aleti yükseltimleri aşağıda listelendiği gibidir;`,`\`\`\`css
${table.table(urunler, {
          border: table.getBorderCharacters(`void`),
          columnDefault: {
            paddingLeft: 0,
            paddingRight: 1,

        },
        columns: {
          0: {
              paddingLeft: 1
          },
          1: {
              paddingLeft: 1,
              alignment: "center"
          },
          2: {
              paddingLeft: 1,
              alignment: "center"
          },
          3: {
              paddingLeft: 1,
              alignment: "center"
          },
          4: {
              paddingLeft: 1,
              alignment: "center"
          },
      },
        drawHorizontalLine: (index, size) => {
          return index === 0 || index === 1 || index === size;
      }
      })}\`\`\``).setFooter(system.footer))
    }
    };

module.exports.configuration = {
    name: "alet-market",
    aliases: ["alet-market", "workshop", "ws"],
    usage: "Taslak",
    description: "Taslak Komutu."
};