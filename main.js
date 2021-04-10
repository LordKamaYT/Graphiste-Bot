const Discord = require('discord.js');

const client = new Discord.Client();

//Préfixe
const prefix = '_';

const fs = require('fs');

client.commands = new Discord.Collection();

const CommandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of CommandFiles){
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Bot online !!');
});

//Commands
client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/_+/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args, Discord);
    } else if(command == 'server'){
        client.commands.get('server').execute(message, args, Discord);
    } else if(command == 'prefix'){
        client.commands.get('prefix').execute(message, args, Discord);
    } else if(command == 'help'){
        client.commands.get('help').execute(message, args, Discord);
    }
})

//Token
client.login('Paste Bot token');
