const gif = require('./commands/gif.js');
const bonk = require('./commands/bonk.js')
const bye = require('./commands/bye.js');
const c = require('./commands/c.js')
const ched = requires('./commands/ched.js')
const choochoo = requires('./commands/choochoo.js')

const commands = { choochoo, gif, bonk, bye, c, ched, };
module.exports = async function(msg) {
      let tokens = msg.content.split(' ');
      let command = tokens.shift();
      if (command.charAt(0) === '$') {
        command = command.substring(1);
        commands[command](msg, tokens);
      }c
    /*if (command === `truth`){
        const index = Math.floor(Math.random() * repliesTruth.length);
        msg.channel.send(repliesTruth[index]);
    }
    if (command === `daddy`){
        const index2 = Math.floor(Math.random() * repliesDaddy.length);
        msg.channel.send(repliesDaddy[index2]);
    }
    if (command === `nsfwtruth`){
        const index = Math.floor(Math.random() * repliesNSFW.length);
        msg.channel.send(repliesNSFW[index]);
    }
    if (command === `help`){
        msg.reply(replyHelp[0]);
    }
    if (command === `version`){
        msg.reply(replyHelp[1]);
    }
    if (command === `ship`){
        msg.reply("Yes Crimson and Buizel are the best ship. Fuck off Haters <:madpanda:748374931443548242>");
    }
    if (command === `c`){
        const index = Math.floor(Math.random() * repliesChoose.length);
        msg.channel.send(repliesChoose[index]);
    }
    if (command === `server`) {
        msg.channel.send(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`);
    }
    if (command === 'bye'){
        msg.reply("Bye you beautiful human");
    }
    if (command === `fuckme`){
        msg.channel.send("Hey who wants to fuck my daddy <@138343172513333248> UwU");
    }
    if (command === `church`){
        msg.channel.send("Do you remember the one time abbey had sex in the church parking lot ? Cecille remembers<:awww:764879232941031456>");
    }
    if (command === `ched`| command === 'Ched'){
        msg.reply("Wow the channel is dead you really had to say it out loud do you ?"); 
    }
    if (command === `support`){
        msg.channel.send("https://discord.gg/MtksE4KFHd");
    }
    if (command ==='kick'){
        //grab the first mentioned user from the message
        // this will return a `User` object, just like msg.author
        if (!msg.mentions.users.size) {
            return msg.reply('you need to tag a user in order to kick them!');
        }
        const taggedUser = msg.mentions.users.first();
        msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
    }
    if (command ==='kiss'){
        if(!msg.mentions.users.size){
            return msg.reply(`You need to tag a user to kiss him/her`);
        }
        const taggedUser = msg.mentions.users.first();
        msg.reply(`kissed ${taggedUser.username}`);
    }
    if (command ==='oi'){
        msg.reply(`u are 1 fucking cheeky kunt mate i swear i am goin 2 wreck u i swear on my mums life and i no u are scared lil bitch gettin your mates to send me messages saying dont meet up coz u r sum big bastard with muscles lol fuckin sad mate really sad jus shows what a scared lil gay boy u are and whats all this crap ur mates sendin me about sum bodybuildin website that 1 of your faverite places to look at men u lil fuckin gay boy fone me if u got da balls cheeky prick see if u can step up lil queer`);
    }
    if (command ==='aww') {
        msg.channel.send("<:awww:764879232941031456><:awww:764879232941031456><:awww:764879232941031456><:awww:764879232941031456><:awww:764879232941031456><:awww:764879232941031456><:awww:764879232941031456><:awww:764879232941031456><:awww:764879232941031456><:awww:764879232941031456><:awww:764879232941031456><:awww:764879232941031456>");
    }
    if (command ==='github'){
        msg.channel.send("https://github.com/CrimsonDynamic/Cecille");
    }
    if (command ==='bonk'){
        if(!msg.mentions.users.size){
            return msg.reply(`You need to tag a user to bonk him/her`);
        }
        const taggedUser = msg.mentions.users.first();
        msg.channel.send(`BONK GO TO HORNY JAIL YOU FILTHY ANIMAL ${taggedUser.username}`);
    }
    if (command ==='spam'){
        var i;
        for( i=0; i< 6;i++){
            msg.channel.send(`spam spam spam spam spam`);
        }
    }
    if (command ==='init'){
        if(!parseInt(args)){
            return msg.reply(`You need to use a number`)
        } msg.channel.send(`Starting a round in ${args} Minutes!\n React to participate!`)
    }
    if (command ==='gif'){
        keywords = args;
        let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENOR_KEY}&limit=8`
        let respone = await fetch(url);
        let json = await respone.json();
        console.log(json);
        let index = Math.floor(Math.random() * json.results.length);
        msg.channel.send(json.results[index].url);
        msg.channel.send("Gif from Tenor " + keywords);
    }
    if (command ==='servers'){
        client.guilds.cache.forEach(guild => {
            console.log(`${guild.name} | ${guild.id}`);
          })
    }
    if (command ==='4595'){
        msg.channel.send("https://discord.gg/9WQMBVtFvR \n This is an awesome server everyone can join")
    }
     if (command ==='leave'){
        var guild = client.guilds.cache.get('731956610972516413')
        guild.leave();

        //client.guild.leave(731956610972516413);
        // 729340856720425010 crimsons test server
        // 731956610972516413 Goldfish server
    }
    else if (command === 'avatar') {
        if (!msg.mentions.users.size) {
            return msg.channel.send(`Your avatar: <${msg.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
    }*/
}