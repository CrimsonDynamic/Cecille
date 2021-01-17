module.exports = function(msg, args){
    if (!msg.mentions.users.size) {
    return msg.channel.send(`Your avatar: <${msg.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
    }
};