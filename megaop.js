const Discord = require("discord.js");
const config = require("./config.json");

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

function action(msg){
    switch(msg) {
        case "/gommemode":
            return '**trololololol**';
        case "/lol":
            return '**lol**';
        default:
            break;
    };
    
}    

client.on('message', (msg) => {
    msg.channel.send(action(msg.content));
});

client.login(config.token);
