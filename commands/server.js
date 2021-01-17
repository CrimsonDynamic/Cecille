module.exports = function(msg, args){
msg.channel.send(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
};