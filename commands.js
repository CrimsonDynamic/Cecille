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
//const servers = require('./commands/servers.js');
const ship = require('./commands/ship.js');
const spam = require('./commands/spam.js');
const support = require('./commands/support.js');
const version = require('./commands/version.js');
const kitten = require('./commands/kitten.js');
const embedTest = require('./commands/embedTest.js');
const holymountain = require('./commands/holymountain.js');
const pasta = require('./commands/pasta.js');
const survey = require('./commands/survey.js');
//const images = require('./commands/image.js')
const slap = require('./commands/slap.js');
const kill = require('./commands/kill.js');
const a = require('./commands/aaaaa.js')
const reboot = require('./commands/reboot.js')
const hug = require('./commands/hug.js');
const request = require('./commands/request.js')
const reddit = require('./commands/reddit.js');
const pins = require('./commands/pins.js')

const commands = {
    choochoo,gif,bye,c,bonk,ched,avatar,nsfwtruth,truth, church,
    daddy, fuckme, github, help, init, kiss, oi, server, ship,
    spam, support, version,kitten,embedTest,holymountain, pasta,
    survey,slap,kill,a,reboot,hug,request,reddit,pins,
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
