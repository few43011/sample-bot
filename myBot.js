//Get discord.js
const Discord = require('discord.js');

//Create client instance as bot
const botGenjo = new Discord.Client();

//Set listener on 'ready'
botGenjo.on('ready', () => {
  console.log('My Ultimate is ready!');
});

//Set listener on 'message'
botGenjo.on('message', message => {
  if (message.content === 'Hello') {
    message.reply('I need Healing!');
  }
});

botGenjo.login('Mjk3NDQ4MjkwODE4MTk1NDU4.C8A73w.x87fAAGCjPCIxYxk1hZm-1zoNDU');
