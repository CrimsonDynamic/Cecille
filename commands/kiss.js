module.exports = function(msg, args){
    if(!msg.mentions.users.size){
        return msg.reply(`You need to tag a user to kiss him/her`);
    }
    const taggedUser = msg.mentions.users.first();
    msg.reply(`kissed ${taggedUser.username} \:kiss:`);
};