const {Guild, MessageEmbed} = require('discord.js');
const qdb = require('quick.db');
const pdb = new qdb.table("puan");
const cdb = new qdb.table("cash");
const mdb = new qdb.table("meslek");
const ms = require('ms');
const Database = require('better-sqlite3');

            class richardDatabase {

////////////// CASH KATEGORİSİ //////////////
static cashOku(uye) {
    let cashgor = cdb.get(`cashcik.${uye.id}.puan`) || 0;
    return cashgor;
}

static cashEkle(uye, miktar) {
    cdb.add(`cashcik.${uye.id}.puan`, miktar)
}

static cashSil(uye, coin) {
    cdb.subtract(`cashcik.${uye.id}.puan`, coin);
}
////////////// CASH KATEGORİSİ //////////////

////////////// MESLEK KATEGORİSİ ////////////// 
static meslekGor(uye) {
    let meslek = mdb.get(`meslek.${uye.id}`);
    return meslek;
}

static itemGor(uye) {
    let item = mdb.get(`meslek.${uye.id}.item`);
    return item; 
}

static meslekKatil(uye, meslek) {
    if (meslek === "Madenci") {
    mdb.set(`meslek.${uye.id}`, { is: "madenci", item: "kazma", seviye: 1, xp: 0 })
}
}

static meslekDegis(uye, meslek) {
    if (meslek === "Madenci") {
        mdb.set(`meslek.${uye.id}`, "Madenci")
}
}

    
////////////// MESLEK KATEGORİSİ //////////////

////////////// COIN KATEGORİSİ //////////////        
                static coinOku(uye) {
                    let puangor = pdb.get(`puancik.${uye.id}.puan`) || 0;
                    return puangor;
                }
        
                static coinEkle(uye, miktar) {
                    pdb.add(`puancik.${uye.id}.puan`, miktar)
                }
        
                static envanterEkle(uye, miktar) {
                    pdb.add(`puancik.${uye.id}.puan`, miktar)
                }
                static envanterSil(uye, miktar) {
                    pdb.add(`puancik.${uye.id}.puan`, miktar)
                }
                static envanterListele(uye) {
                    pdb.add(`puancik.${uye.id}.puan`)
                }
              
                static coinTemizle(uye) {
                        pdb.set(`puancik.${uye.id}.puan`, 0);
                        qdb.set(`mesajkontrol.${uye.id}`, 0);
                        cdb.set(`cashcik.${uye.id}`, 0);
                }
        
                static mesajSil(uye) {
                    qdb.delete(`mesajkontrol.${uye.id}`);
                }
                static mesajKontrol(uye) {
                    let kontrol = qdb.get(`mesajkontrol.${uye.id}`);
                    return kontrol;
                }
                static mesajEkle(uye) {
                    qdb.add(`mesajkontrol.${uye.id}`, 1);
                }
                static coinSil(uye, coin) {
                    pdb.subtract(`puancik.${uye.id}.puan`, coin);
                }
////////////// COIN KATEGORİSİ //////////////

////////////// MESAJ KATEGORİSİ //////////////
  static mesaj(kanal, aciklama) {
    return kanal.wsend(aciklama);
  }   
////////////// MESAJ KATEGORİSİ //////////////

////////////// EMBED KATEGORİSİ //////////////
        static embedOlustur(uye, kanal, aciklama, color) {
          return kanal.wsend(new MessageEmbed()
    .setDescription(aciklama)
    .setColor(color)
    .setFooter(system.footer)
    .setAuthor(uye.tag, uye.avatarURL({ dynamic: true, size: 2048 })));

        }   
        static avatarOlustur(uye, kanal, aciklama, color) {
          return kanal.wsend(new MessageEmbed()
    .setDescription(aciklama)
    .setImage(uye.avatarURL())
    .setColor(color)
    .setFooter(system.footer)
    .setAuthor(uye.tag, uye.avatarURL({ dynamic: true, size: 2048 })));

        }   
        static embedBasari(uye, kanal, aciklama) {
         return kanal.wsend(new MessageEmbed()
         .setDescription(aciklama)
         .setColor("#00ff00")
         .setFooter(system.footer)
         .setAuthor(uye.tag, uye.avatarURL({dynamic: true, size: 2048}))); 
        }
        static embedHata(uye, kanal, aciklama) {
          return kanal.wsend(new MessageEmbed()
    .setDescription(aciklama)
    .setColor("#ff0000")
    .setFooter(system.footer)
    .setAuthor(uye.tag, uye.avatarURL({ dynamic: true, size: 2048 })));

        }   
////////////// EMBED KATEGORİSİ //////////////
  
        }
module.exports = richardDatabase;
