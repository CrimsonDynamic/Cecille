//const replyarrays = require("./arrayreplies");
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
    "Did you ever had a sex dream? If yes what was it about ? ",
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
exports.repliesTruth = repliesTruth;
