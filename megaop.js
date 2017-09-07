const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (msg) => {
    switch(msg.content) {
        case "/gommemode":
            msg.channel.send('**trololololol**');
            break;
        case "/lol":
            msg.channel.send('**lol**');
            break;
        default:
            //Nothing
    };
});

client.login(config.token);
