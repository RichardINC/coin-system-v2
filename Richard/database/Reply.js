const { SystemChannelFlags } = require("discord.js");

class Reply {
    static sistemReply() {       
         const cevap = global.cevap = {
            noyt: "Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin.",
            qwe: "qwe",
            fakirlik: `Oynayabilmek için hesabında **100 ${coinsistem.cashIsmi}** bulunmalıdır!`,
            fakir: `Oynayabilmek için hesabında **100 ${coinsistem.coinIsmi}** bulunmalıdır!`,
            miktar: "Oynayabilmek için geçerli bir miktar girmelisin!",
            issiz: "Çalışmak için herhangi bir işe sahip değilsin, önce bir işe girmelisin!",
            isli: "Zaten bir işe katılmışsın, "+ system.prefix +"work komutu ile çalışmayı denemelisin",
            itemsiz: "Dostum çalışmak için bir işe katılmışssın fakat patronun eşyanı vermemiş, başka bir işe girmeyi denemelisin!",
            fakirsin: "Hesabında hiç **"+ coinsistem.cashIsmi +"** bulunmadığı için işlem gerçekleştirelemedi!",
            yetersiz: "Hesabında yeterli miktarda **"+ coinsistem.cashIsmi +"** bulunmamaktadır!",
            renksec: "Geçerli bir renk seçmelisin örn: Siyah/Kırmızı/Yeşil",
            hatalikullanim: `Komutu doğru kullanmalısın.`
        }
    }
}
module.exports = Reply;