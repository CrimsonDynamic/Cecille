const replyHelp = require("../arrayreplies");

module.exports = {
    name: 'help',
    description: 'help',
    execute(message, args){
        msg.channel.send(replyHelp[0]);
    },
};