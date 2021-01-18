console.log('Beep Beep!');
const img = require('image-scraper');
const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');
require('dotenv').config();

client.login(process.env.API_KEY);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('ready!')
}
const commandHandler = require('./commands');

client.on('message', commandHandler);