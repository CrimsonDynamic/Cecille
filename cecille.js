console.log('Beep Beep!');
const Discord = require('discord.js');
const { prefix } = require('./config.json');
//const { repliesTruth } = require("./commands/repliesTruth");

const client = new Discord.Client();

require('dotenv').config();

client.login(process.env.API_KEY);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('ready!')
}
const repliesTruth = [
    'Do you hate u/That-Scifi-Nerd with a burning passion?',
    'When was the last time you lied?',
    'When was the last time you cried?',
    'What is your biggest fear?',
    'What is your biggest fantasy?',
    'Do you have any fetishes?',
    "What's a secret you've never told anyone?",
    "Have you ever broken the law?",
    "What's your biggest insecurity?",
    "What's your guilty pleasure?",
    "Do you have a favourite friend?",
    "What was the last thing you searched for on your phone?",
    "If you had to choose between going naked or having your thoughts appear in thought bubbles above your head for everyone to read, which would you choose?",
    "Have you ever walked in on your parents doing it?",
    "After you've dropped a piece of food, what's the longest time you've left it on the ground and then ate it?",
    "What's the first thing you would do if you woke up one day as the opposite sex?",
    "True or false? Do you have a crush on someone in this server?",
    "Have you ever practiced kissing in a mirror?",
    "Have you ever peed yourself?",
    "What was your most embarrassing moment in public?",
    "What would be in your web history that you’d be embarrassed if someone saw?",
    "Have you ever tried to take a sexy picture of yourself?",
    "Do you think one of the participants is cute? If so who ?",
    "Who do you like the least in this chat, and why?",
    "Who is the sexiest person in this chat?",
    "What color underwear are you wearing right now?",
    "What was the last thing you texted?",
    "Would you rather lose your sex organs forever or gain 200 pounds?",
    "Who in this chat would be the worst person to date? Why?",
    "If you were reborn, what decade would you want to be born in?",
    "Have you ever been caught checking someone out?",
    "Do you have bad foot odor?",
    "What is something you’ve done to try to be ‘cooler’?",
    "Have you ever got caught doing something you shouldn’t?",
    "What part of your body do you love, and which part do you hate?",
    "What is something that no one else knows about you?",
    "Favorite lego set?",
    "What's the scariest thing you've done?",
    "What's a horror movie that has stuck with you?",
    "opinion on Landon?",
    "Do you like horror movies?",
    "Has a crush ever found out you liked them and turned you down?",
    "What’s the most embarrassing thing you’ve done regarding your crush?",
    "What's are you most proud of?",
    "Is Tim too rich?",
    "What's a cartoon from your childhood that sticks with you?",
    "If you could be invisible, what is the first thing you would do?",
    "What is the most embarrassing music you listen to",
    "Celebrity crush?",
    "Are you insecure about anything?",
    "What is your biggest regret",
    "If a genie granted you three wishes, what would you ask for?(no infinite wishes except for Crimson my Daddy)",
    "Do you ship Crimson and Buizel?",
    "Most unpopular opinion",
    "What's the last Lego set you got?",
    "What’s the worst (sfw) thing you’ve ever done?",
    "Will you rather listen to Tim talk about Lego, or listen to Crimson talk about technology?",
    "Do you feel uncomfortable answering nsfw questions?",
    "Is it ok to pee in the shower?",
    "What's a YouTuber that you just started back watching recently?",
    "Do you believe in superstitions if so which ones?",
    "Favorite movie?",
    "Favorite book!?",
    "What's the most painful thing you've ever felt?",
    "Are you willing to create a Buizel and Crimson fan fiction?",
    "Would you break up with your partner for £1 million",
    "Favorite actor/tress",
    "What do you want on your tombstone.",
    "Would you rather never have not a partner and not have any financial burdens, or have a partner and be in debt?",
    "Have you ever been in love?",
    "Would you rather be divorced or do the divorcing?",
    "Who would you like to spend a day with from the server?",
    "Who would you call to help bury a dead body?",
    "If the server had a hunger games where everyone was involved who would win",
    "Who is the hottest? Hagrid, Dumbledore, or Dobby?",
    "What do you do to get yourself 'sexy'?",
    "Who is your current crush?",
    "Who are you jealous of?",
    "Who are the top five cutest guys in your class or this server you choose? Rank them.",
    "How many kids do you want to have in the future?",
    "Have you ever flirted with your best friend’s siblings?",
    "Jock, nerd, or bad guy/girl?",
    "Have you ever had a crush on friend's boyfriend/girlfriend?",
    "Who is your first pick for prom?",
    "What's the sexiest thing about a guy?",
    "What's the sexiest thing about a girl?",
    "What's one physical feature that you would change on yourself if you could?",
    "Would you date someone shorter than you?",
    "If someone paid you $1000 to wear your bra outside your shirt, would you do it?",
    "Who would you hate to see naked?",
    "How long have you gone without a shower?",
    "If you could only text one person for the rest of your life, but you could never talk to that person face to face, who would that be?",
    "How long have you gone without brushing your teeth?",
    "What have you seen that you wish you could unsee?",
    "If you could be reincarnated into anyone's body, who would you want to become?",
    "If you switched genders for the day, what would you do?",
    "What accomplishment are you most proud of",
    "What's one food that you will never order at a restaurant?",
    "What's the most useless piece of knowledge you know?",
    "What did you learn in school that you wish you could forget?",
    "If you ran out of toilet paper, would you consider wiping with the empty roll?",
    "What would be the worst part about getting pantsed in front of your crush?",
    "If you could only use one swear word for the rest of your life, which one would you choose?",
    "What's the best thing to say to your friend that would be the worst thing to say to your crush?",
    "If you could play a prank on anyone without getting caught, who would you play it on?",
    "Would you rather not shower for a month, or eat the same meal every day for a month?",
    "What animal most closely resembles your eating style?",
    "What if your best friend told you that he/she liked your crush?",
    "What was your first impression of [fill in the name of a person in the chat](You choose)",
    "Have you ever shared your friend's secret with someone else?",
    "Rate everyone in the chat from 1 to 10, with 10 being the hottest.",
    "Rate everyone in the chat from 1 to 10, with 10 being the best personality.",
    "Name one thing you would change about each person in this chat.",
    "You win a trip and are allowed to bring two people. Who do you pick?",
    "Describe what your crush looks like.",
    "What is your crush's personality like?",
    "Who do you hate, and why?",
    "What's your biggest pet peeve?",
    "How many people have you kissed?",
    "If you could date anyone in the world, who would you date?",
    "Would you rather be skinny and hairy or fat and smooth?",
    "Describe your perfect date.",
    "Would you ever date two people at once if you could get away with it?",
    "You have to delete every app on your phone except for five. Name the five you would keep.",
    "Have you ever had a crush on a teacher?",
    "Who do you think would make the best kisser in the chat? ",
    "Have you ever sent someone the wrong text? What was it",
    "Who do you think is the cutest person in the chat and why?",
    "What the biggest deal-breaker for you?",
    "How far would you go on a first date?",
    "Have you ever regretted something you did to get a crush's attention?",
    "Of the people in the server, who do you think would make the best president?",
    "Describe what makes someone husband or wife material.",
    "What is your worst habit?",
    "What's one thing you do that you don't want anyone to know about?",
    "Do you frequently stalk anyone on social media? Who?",
    "If you had to choose between dating someone ugly who was good in bed or dating someone hot who was bad in bed, which would you choose?",
    "Who in this chat would you make out with?",
    "When was the last time you flexed in the mirror?",
    "Blonde or brunette or ginger?",
    "If your parents hated your girlfriend/boyfriend, would you dump her/him?",
    "If your girlfriend/boyfriend hated your best friend, what would you do?",
    "What is your biggest turn-off?",
    "If you had to choose between being poor and smart or being rich and dumb, what would you choose?",
    "Would you go out with an older woman/man?",
    "Boxers or briefs?",
    "If every time you checked out a girl's/boy's body, you would gain 5 pounds, how often would you do it?",
    "Have you ever lied about your age?",
    "Have you ever fallen in love at first sight?",
    "If a girl/boy you didn't like had a crush on you, how would you act around her/him?",
];
const repliesNSFW =[
    "Did you ever had a sex dream? If yes what was it about ? ",
    "Do you have any fetishes?",
    "Have you ever sent out a nude Snapchat?",
    "Have you ever received a nude selfie? Who was it from? What was your reaction? Like or dislike?",
    "Describe the most attractive thing about each person in this chat.",
    "What is your wildest fantasy?",
    "How far would you go with someone you just met and will never see again?",
    "Rate me(here the person before) on a scale of 1 to 10, with 10 being the hottest.",
    "Would you choose a wild, hot relationship or a calm and stable one?",
    "What's your biggest turn-on?",
    "And your biggest turn-off?",
    "Would you go out with me(last person again) if I was the last person on earth?",
    "What's the sexiest thing about [fill in the name of a person in the chat(you can choose)]?",
    "If you could go on a romantic date with anyone in this chat, who would you pick?",
    "Have you ever flashed someone?",
    "Have you ever sexted anyone? And did you like it ? ;)",
    "Who has seen you without clothes on?",
    "Would you ever consider posing for Playboy?",
    "Have you ever been to a nudist beach? Would you consider going?",
    "Have you ever seen a naughty magazine?",
    "Have you ever sent a nude selfie? Who would you send it to in the chat and outside?",
    "Who do you most want to sleep with, out of everyone here?",
    "Have you ever been attracted to the same sex?",
    "When and where was your first kiss? Who was it with?",
    "When did you lose your virginity, and to whom did you lose it?",
    "What's your ultimate sexual fantasy?",
    "Would you go out with an older guy/girl? How old is too old?",
    "Do you sleep in the nude?",
    "How much money would we have to pay you for you to agree to flash your boobs?",
    "Have you ever been in a 'friends with benefits' situation?",
    "If you had to go skinny dipping with someone, who in this chat would you choose?",
    "If I paid you $100, would you wear your sexiest clothes to class?",
    "If you got to have a threesome with people in this chat, who would you do it with and why?",
    "Have you ever sexted anyone? If so, read one of the sexts in a fake British accent.",
    "What is the most adventurous thing you’d want someone to do to you?",
    "What is the song that you get it on to the most?",
    "Where are you on the straight / queer spectrum? Be honest!",
    "What’s your favorite fantasy to pleasure yourself to?",
    "Where is the weirdest place that you’ve ever gone solo?",
    "What is your favorite 'special' toy?",
    "When was the first time you came?",
    "Who was your best partner and why?",
    "When was your first kiss?",
    "Do you have an “I’m getting laid tonight” outfit? What it is?",
    "Who’s the hottest person at work/school?",
    "What would be more thrilling: angry sex or make-up sex?",
    "What’s the worst kiss you’ve ever been given?",
    "What’s something romantic you’ve done that you’re most proud of?",
    "How often are you horny?💢",
    "Have you ever been caught masturbating?",
    "How often are you masturbating?",
    "Ideal Sex Position?",
    "How do you masturbate?",
    "Have you ever seen someone naked? Per accident or etc.?",
    "Bra/Dick Size",
    "Pubic Hair how is it for you?",
    "Most embarrasing sexual story",
    "Have you ever considered a threesome?",
    "Do you have any interesting fetishes?",
    "Have you ever been to a strip club?",
    "When did you go solo for the first time?",
    "What was the most powerful sexual experience you’ve ever had?",
    "Give your junk a name",
    "Most embarrassing time you got turned on?",
    "Ever wanted to try on women’s clothing?",
    "What is the dumbest thing you’ve ever done?",
    "Strangest off-limits crush?",
    "Have you ever made someone cry?",
    "What is the craziest thing you’ve ever watched?(Porn like)",
    "What is one thing you’ve never done in the bedroom?",
    "Have you ever done it in a car?",
    "Have you ever given or been given ‘attention’ while driving a car?",
    "When it comes to lingerie, is less best, or leave something to unwrap?",
    "Have you ever role played?",
    "What’s the worst lie you’ve ever told?",
    "What’s your worst substance story (getting drunk, high, etc.)?",
    "Do you have any spicy pictures or videos saved on your phone?",
    "Send the most recent text that you sent your best friend.",
    "Write a 100-word naughty story and send it in the chat.",
    "What are you wearing?",
    "What’s your worst fart story?",
    "What did you think of me when you first met me?",
    "When was your sexual awakening?",
    "Who do Iremind you of?",
    "Are you turned on right now?",
    "Do you want to be tied up?",
    "What was your funniest sexual experience like?",
    "Have you ever done it in a public place? Like Abbey :)",
    "Who’s the ex you’d do again in a heartbeat?",
    "Do you have a hot cousin?",
    "Hottest thing someone’s ever done to you?",
    "Do you think your parents are hot?",
    "Fill in the blanks: I would pay $1,000 to have X do X to me.",
    "Do you prefer to have a dominant, submissive, or neutral partner? Explain why?",
    "How was your first sex experience?",
    "How was your first same sex experience?",
    "Have you ever experimented with someone of the same sex?",
    "What are the sexiest things someone has said to you?",
    "Does naughty talk get you aroused?",
    "Have you ever faked an orgasm?",
    "Would you rather give or receive pleasure?",
    "Have you ever fantasized about a teacher?",
    "What’s a sexual act you’ll never do?",
    "What’s the dirtiest thing you have been caught doing ?",
    "Do you like sex to be rough or sensual?",
    "What was your most embarrassing situation while in bed?",
    "Who gave you your first orgasm?",
    "Have you ever been friend-zoned? If so, by whom?",
    "What excites you the most?",
    "What is your favorite type of porn?",
    "Have you ever masturbated in a public space?",
    "What are your dirtiest secrets?",
    "Have you ever tried anal sex? Or thought about it?",
    "Who in this chat would you most want to see naked?",
    "Describe the underwear you're wearing right now.",
    "Name a celebrity you've had a sexual fantasy about.",
    "Have you ever walked in on people having sex?",
    "Tell us your most awkward sex dream.",
    "Tell us the hottest sex dream you've ever had.",
    "Have you ever taken nudes?",
    "Have you ever recorded yourself having sex/ or masturbating?",
    "Which would you rather give up for a year: sex or alcohol?",
    "Which would you rather give up for a year: partner sex or masturbation?",
    "Have you ever had sex in a car? (Like next to a church 😏)",
    "What's the highest number of orgasms you've had in a day?",
    "Would you rather have sex with someone 10 years older or 5 years younger?",
    "What’s a popular fetish that you would never want to try?",
    "If you could have one sexual superpower, what would it be?",
    "Do you think virginity is special?",
    "Who is the oddest person you’ve ever had a sexual fantasy about?",
    "Do you think there’s an age where someone becomes “too old” to be a virgin?",
    "Who in the chat do you think has slept with the most people?",
    "Do you think there should be a limit on the amount of people you sleep with in your lifetime or do you think that doesn’t matter?",
    "Have you ever called someone “Daddy” or been called “Daddy” while having sex?",
    "What fictional character have you or could you have sexual fantasies about?",
    "Are you a fan of foreplay?",
    "Are you a fan of shower sex?",
    "When’s the last time you pleasured yourself?",
    "Do you enjoy receiving nudes?",
    "Tell me about the best orgasm you’ve ever had.",
    "Have you ever watched or wanted to watch another couple have sex?",
    "Lights off or lights on during sex?",
    "Where is your favorite place to have sex?",
    "Does dirty talk get you horny?",
    "What’s the quickest way to get you into bed?",
    "Do you prefer a little hair or smooth-shaven?",
    "If I was with you right now, what would you want to do to me?",
    "If I was with you right now, what would you want me to do to you?",
    "Have you ever had phone sex before?",
    "How can I get you horny?",
    "Have you ever done something that you feel guilty about?",
    "If I went through your room, would I find anything hidden or interesting?",
    "Do you have a name for your penis or vagina?",

]
const replyHelp =[
    "Hello this is Cecille the Truth or Truth Bot by Crimson.\nUse $truth for truths; \n$nsfwtruth for nsfw truths; \n$help for help and $version for the current bots version; \n$c so if someone is slow; \n$support is for the Discord Server link of the bot for tech support etc.\n$kiss is to kiss someone 💋 ",
    "This is Version 0.2.2 Cheesecake",
]
const repliesDaddy =[
    'Fuck me harder Daddy',
    'Punish me Daddy'
]
const repliesChoose =[
    "CHOOSIOOOO YOU MOTHERFUCKER <:fuck:748404959401476176>",
    "IF YOU DONT FUCKING CHOOSIOO IM GONNA MAKE YOU CRY SO HARD",
    "OK THIS REQUIRES SOME REAL FUCKING BLACK MAGICKERY TO MAKE YOU CHOOSIO",
    "wow you really are a badass for not chooosioing /s",
    "Just look into the mirror you will see the same disappointment your parents see in you and the chat because you not choosio"
]
client.on('message', gotMessage);
function gotMessage(msg){
    console.log(msg.content);
    if (!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === `truth`){
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
        const taggedUser = msg.mentions.users.first();
        msg.channel.send(`BONK GO TO HORNY JAIL YOU FILTHY ANIMAL ${taggedUser.username}`);
    }
    if (command ==='spam'){
        var i;
        for( i=0; i< 10;i++){
            msg.channel.send(`spam spam spam spam spam`);
        }
    }
    else if (command === 'avatar') {
        if (!msg.mentions.users.size) {
            return msg.channel.send(`Your avatar: <${msg.author.displayAvatarURL({ format: "png", dynamic: true })}>`);
        }
    }
}