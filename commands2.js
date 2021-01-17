const gif = require('./commands/gif.js');
const choochoo = require('./commands/choochoo.js');
const bye = require('./commands/bye.js')
const c = require('./commands/c.js')
const bonk = require('./commands/bonk.js')


const commands = { choochoo, gif, bonk, bye, c,};

module.exports = async function(msg) {
  if (msg.channel.id == '715786219770085396') {
    let tokens = msg.content.split(' ');
    let command = tokens.shift();
    if (command.charAt(0) === '!') {
      command = command.substring(1);
      commands[command](msg, tokens);
    }
  }
};