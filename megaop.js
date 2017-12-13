const Discord = require("discord.js");
const config = require("./config.json");
const action = require('./reaction')

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', (msg) => {
    msg.channel.send(action.action(msg.content));
});

client.login(config.token);
