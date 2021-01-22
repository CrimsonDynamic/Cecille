module.exports = function(msg){
    if(!msg.mentions.users.size){
        return msg.reply(`You need to tag a user to hug him/her`);
    }
    const taggedUser = msg.mentions.users.first();
    msg.reply(`hugged ${taggedUser}`);
};