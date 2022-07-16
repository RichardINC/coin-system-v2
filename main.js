const {Client} = require('discord.js');
const client = global.client = new Client({ fetchAllMembers: true });
const dataReply = require("./Richard/database/Reply");
const dataHandler = require('./Richard/database/Handler');
const dataBase = require('./Richard/database/Database');
const qdb = require('quick.db');
const fs = require("fs");
const commands = new Map();
global.commands = commands;
const aliases = new Map();
const guildInvites = new Map();
global.aliases = aliases;
global.client = client;

// webhooksend
require("./Richard/database/Utils");

// System Required
dataHandler.sistemSetup();
dataReply.sistemReply();
/*
// moderasyon
dataHandler.moderasyon();
*/
client.login(system.token);
  /////////////// ACILIS
  client.on("ready", async () => {
    client.user.setPresence({ activity: { name: system.activity }, status: "idle" });
    console.log("[BOT BAŞARIYLA GİRİŞ YAPTI]")
  });
  /////////////// ACILIS

  fs.readdir("./Richard/command", (err, files) => {

    if(err) return console.error(err);

    files = files.filter(file => file.endsWith(".js"));
            console.log('\x1b[36m%s\x1b[0m', `[ COIN (${files.length}) komut yüklendi! ]`);

    files.forEach(file => {

        let prop = require(`./Richard/command/${file}`);

        if(!prop.configuration) return;

      

        if(typeof prop.onLoad === "function") prop.onLoad(client);

        commands.set(prop.configuration.name, prop);

        if(prop.configuration.aliases) prop.configuration.aliases.forEach(aliase => aliases.set(aliase, prop));

    });

});

  client.on("message", (message) => {

        if (message.author.bot ||!message.content.startsWith(system.prefix) || !message.channel || message.channel.type == "dm") return;

        let args = message.content

          .substring(system.prefix.length)

          .split(" ");

        let command = args[0];

        let bot = message.client;

        args = args.splice(1);

        let calistirici;

        if (commands.has(command)) {

          calistirici = commands.get(command);

          calistirici.execute(bot, message, args);

        } else if (aliases.has(command)) {

          calistirici = aliases.get(command);

          calistirici.execute(bot, message, args);

        }
  })


fs.readdir("./Richard/events", (err, files) => {

    if(err) return console.error(err);

    files.filter(file => file.endsWith(".js")).forEach(file => {

        let prop = require(`./Richard/events/${file}`);
        console.log(`[ EVENT ] ${file} aktivitesi yüklendi!`)
        if(!prop.configuration) return;

        client.on(prop.configuration.name, prop);

    });

});
