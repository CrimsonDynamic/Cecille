const replyHelp =[
    "Hello this is Cecille the Truth or Truth Bot by Crimson.\nUse $truth for truths; \n$nsfwtruth for nsfw truths; \n$help for help and $version for the current bots version; \n$c so if someone is slow; \n$support is for the Discord Server link of the bot for tech support etc.\n$kiss is to kiss someone 💋 ",
    "This is Version 0.3.8 Buizel",
];
module.exports = function(msg, args){
msg.reply(replyHelp[1]);
msg.channel.send(`In this version I added 150 more questions for $nswftruth`);
};