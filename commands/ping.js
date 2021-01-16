module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message, args) {
        msg.channel.send('Pong.');
    }
}