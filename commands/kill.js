module.exports = function(msg, args){
    if (!msg.mentions.users.size) {
        return msg.reply('you need to tag a user in order to kill them!');
    }
    const taggedUser = msg.mentions.users.first();
    msg.reply(`Killed ${taggedUser} <:Lewis:776235634167119883>`);
}