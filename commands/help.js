const replyHelp =[
    "Hello this is Cecille the Truth or Truth Bot by Crimson.\n Use $truth for truths; \n $nsfwtruth for nsfw truths (disabled on non nsfw); \n $help for help and $version for the current bots version; \n $c so if someone is slow; \n $support is for the Discord Server link of the bot for tech support etc.\n $kiss is to kiss someone 💋 \n with $gif you can search for a gif \n with $github you can see the bots github \n with $server you can see server stats \n with $version you see the current version",
    "This is Version 0.2.2 Cheesecake",
]
module.exports = function(msg, args){
msg.reply(replyHelp[0]);
msg.channel.send('Use $survey for a quick form you can fill out regarding the bot.\n I would love your participation!')
}