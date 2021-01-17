if(!msg.mentions.users.size){
    return msg.reply(`You need to tag a user to bonk him/her`);
}
const taggedUser = msg.mentions.users.first();
msg.channel.send(`BONK GO TO HORNY JAIL YOU FILTHY ANIMAL ${taggedUser.username}`);