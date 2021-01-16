const replyHelp = require("../arrayreplies")

module.exports = {
    name: 'help',
    description: 'help',
    execute(msg, args){
        msg.channel.send(replyHelp[0]);
    }
}