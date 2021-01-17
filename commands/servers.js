module.exports = function(msg, args){
client.guilds.cache.forEach(guild => {
    console.log(`${guild.name} | ${guild.id}`);
  })
};