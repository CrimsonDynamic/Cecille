module.exports = {
    name: 'truth',
    description: 'shows truth questions',
    execute(msg, args){
        const index = Math.floor(Math.random() * repliesTruth.length);
        msg.channel.send(repliesTruth[index]);
    }
}