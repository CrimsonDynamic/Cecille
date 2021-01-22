module.exports = function(msg, args){
if (!msg.mentions.users.size) {
    return msg.reply('you need to tag a user in order to oi them!');
}
const taggedUser = msg.mentions.users.first();
msg.channel.send(`Slapped ${taggedUser} <:madpanda:748374931443548242>`);
}