module.exports = function(msg,args,dependencies) {

    execute(msg, args, dependencies) ;{
        
        const [Discord, got] = dependencies;
        let subreddit = "";

        if(args.length == 0) {
            msg.channel.send("Please specify a subreddit! Example: `<bot_prefix>reddit dankmemes`");
            return;
        } else {
            subreddit = args.shift().toLowerCase();
        }
         

        let url = ``;
        if(subreddit == null) {
            url = `https://www.reddit.com/r/random/.json`;
        } else {
            url = `https://www.reddit.com/r/${subreddit}/random/.json`;
        }

        try {
            got(url).then(response => {
                    try {
                        const content = JSON.parse(response.body);
                        const postType = content[0].data.children[0].data.post_hint;
                        const permalink = content[0].data.children[0].data.permalink;
                        const postUrl = `https://reddit.com${permalink}`;
                        const postImage = content[0].data.children[0].data.url;
                        const postTitle = content[0].data.children[0].data.title;
                        const postUpvotes = content[0].data.children[0].data.ups;
                        const postNumComments = content[0].data.children[0].data.num_comments;
                        if(postType == "rich:video") {
                            const videoUrl = content[0].data.children[0].data.url_overridden_by_dest;
                            msg.channel.send(videoUrl);
                        } else {
                            const embed = new Discord.MessageEmbed();
                            embed.addField(`${postTitle}`, `[View thread](${postUrl})`);
                            embed.setImage(postImage);
                            embed.setFooter(`👍 ${postUpvotes} 💬${postNumComments}`);
                            msg.channel.send(embed);
                        }
                    } catch (err) {
                        msg.channel.send("Reddit machine goes brrr. Sorry, could not fetch posts from this subreddit :(");
                    }
            });
        } catch(err) {
            msg.channel.send("I'm currently having trouble working with reddit. Please try again later.");
        }
    }
}