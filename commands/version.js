const replyHelp =[
    "Hello this is Cecille the Truth or Truth Bot by Crimson.\nUse $truth for truths; \n$nsfwtruth for nsfw truths; \n$help for help and $version for the current bots version; \n$c so if someone is slow; \n$support is for the Discord Server link of the bot for tech support etc.\n$kiss is to kiss someone 💋 ",
    "This is Version 0.3.1 Marshmallow",
];
module.exports = function(msg, args){
msg.reply(replyHelp[1]);
};