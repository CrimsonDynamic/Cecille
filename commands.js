const gif = require('./commands/gif.js');
const choochoo = require('./commands/choochoo.js');
const bye = require('./commands/bye.js');
const c = require('./commands/c.js');
const bonk = require('./commands/bonk.js');
const ched = require('./commands/ched.js');
const avatar = require('./commands/avatar.js');
const nsfwtruth = require('./commands/nsfwtruth.js')
const truth = require('./commands/truth.js');
const church = require('./commands/church.js');
const daddy = require('./commands/daddy.js');
const fuckme = require('./commands/fuckme.js');
const github = require('./commands/github.js');
const help = require('./commands/help.js');
const init = require('./commands/init.js');
const kiss = require('./commands/kiss.js');
const oi = require('./commands/oi.js');
const server = require('./commands/server.js');
const servers = require('./commands/servers.js');
const ship = require('./commands/ship.js');
const spam = require('./commands/spam.js');
const support = require('./commands/support.js');
const version = require('./commands/version.js');
const kitten = require('./commands/kitten.js');
const embedTest = require('./commands/embedTest.js');

const commands = { 
    choochoo,gif,bye,c,bonk,ched,avatar,nsfwtruth,truth, church,
    daddy, fuckme, github, help, init, kiss, oi, server, servers, ship,
    spam, support, version,kitten,embedTest,
};
module.exports = async function(msg) {
    console.log(msg.content);
      let tokens = msg.content.split(' ');
      let command = tokens.shift();
      if (command.charAt(0) === '$') {
        command = command.substring(1);
        commands[command](msg, tokens);
      }
}