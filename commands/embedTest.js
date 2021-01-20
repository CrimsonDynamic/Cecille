const Discord = require('discord.js');
module.exports = function(msg, args,client,user){
  const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('This a test title')
	//.setURL('https://discord.js.org/')
	.setAuthor('Cecille', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('This is a test description')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'Help', value: '1' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Truths', value: '$truth', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('I love yall', 'https://i.imgur.com/wSTFkRM.png');

msg.channel.send(exampleEmbed);
}