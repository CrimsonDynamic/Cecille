const Discord = require('discord.js');
const client = new Discord.Collection();
module.exports = function(msg, args,client){
  client.guilds.cache.forEach(guild => {
    console.log(`${guild.name} | ${guild.id}`);
  })
};