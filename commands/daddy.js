module.exports = function(msg, args){
const index2 = Math.floor(Math.random() * repliesDaddy.length);
        msg.channel.send(repliesDaddy[index2]);
}