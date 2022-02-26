const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'OTQ3MDUzODA4MTUwNzc3ODU2.Yhnqlw.I5YJb74Tzob_RGNlMJDdLz6569Y';

bot.on('ready',() =>{
    console.log('This bot is online!');
})

bot.on('message',msg =>{
    if(msg.content === "HELLO"){
        msg.reply('HELLO FRIEND!');
    }
})

bot.login(token);