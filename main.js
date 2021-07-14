const Discord = require('discord.js');

const client = new Discord.Client();

require('discord-buttons')(client)


const fs = require('fs');

const memberCounter = require('./counters/member-counter');

client.commands = new Discord.Collection();
client.event = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handler/${handler}`)(client, Discord);

})


client.login('Your token');
