module.exports = function(msg, args){
if (!msg.mentions.users.size) {
    return msg.reply('you need to tag a user in order to kick them!');
}
const taggedUser = msg.mentions.users.first();
msg.channel.send(`Slapped ${taggedUser.username} <:madpanda:748374931443548242>`);
}