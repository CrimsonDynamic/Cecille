
const Discord = require('discord.js');
module.exports = function(msg, args,client,user){
      const exampleEmbed = new Discord.MessageEmbed()
        .setColor('#b19cd9')
        .attachFiles(['./assets/Cecille.jpg'])
        .setTitle('Help')
        //.setURL('https://discord.js.org/')
        .setAuthor('Cecille', 'https://i.imgur.com/a/F0sxS5m',)
        .setDescription('This is the help page')
        .setThumbnail('attachment://Cecille.jpg')
        .addFields(
            { name: '$truth', value: 'This command gives you Truth or Dare Questions' },
            { name: '$nsfwtruth', value: 'This gives NSFW Truth or Dare Questions'},
            {name:'$slap <@Mention>', value:'This slaps a user'},
            {name:'$kiss <@Mention>', value:'This kisses a user'},
            {name:'$version', value:'This gives the current version of the bot'},
            {name:'$server', value:'This command gives stats about this server'},
            {name:'$support', value:'This command gives an invite link to the Discord Server of Cecille'},
            {name:'$pasta', value:'This command gives a random copypasta'},
            {name:'$gif <keywords>', value:'This command searches for gifs on tenor based on keywords'},
            {name:'$bonk <@Mention>', value:'With this command you can bonk someone for being horny'},
            {name:'$github', value:'This leads to Cecilles Github page'},
            {name:'$ship', value:'This displays the best ship on all servers'},
            {name:'$survey', value:'This command gives you a link to a survey about the bot :)'},
            {name:'$holymountain', value:'This command gives you the holy mountain leopard nipple gif'},
        )
        .setTimestamp()
        .setFooter('I love yall, Cecille <3','attachment://Cecille.jpg');
    msg.channel.send(exampleEmbed);
 }