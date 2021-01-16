const fs = require('fs');
const Discord = require('discord.js');
const { prefix } = require('./config2.json');
const client = new Discord.Client();
client.commands = new Discord.Collection();

require('dotenv').config();


const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.login(process.env.API_KEY2);
client.once('ready', () => {
	console.log('Ready!');
});
client.on('message', msg =>{
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    console.log(msg.content);
    if(msg.content.startsWith (`${prefix}ping`)){
        msg.channel.send('Pong.');
    }
    else if (command === 'args-info'){
        if(!args.length) {
            return msg.channel.send(`You didnt provide any arguments, ${msg.author}!`);
        }else if (args[0] === 'foo'){
            return msg.channel.send('bar');
        }
        msg.channel.send(`First argument: ${args[0]}`);
    }
    if (command ==='kick'){
        //grab the first mentioned user from the message
        // this will return a `User` object, just like msg.author
        const taggedUser = msg.mentions.users.first();
        msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    }
});

