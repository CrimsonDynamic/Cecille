const repliesTruth =[
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
    "Do you think one of the participants is cute? If so who ?",
    "Who do you like the least in this chat, and why?",
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
    "Favorite book?",
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
    "Who is your current crush?",
    "Who are you jealous of?",
    "Who are the top five cutest guys/girls in your class or this server you choose? Rank them.",
    "How many kids do you want to have in the future?",
    "Have you ever flirted with your best friend’s siblings?",
    "Jock, nerd, or bad guy/girl?",
    "Have you ever had a crush on friend's boyfriend/girlfriend?",
    "Who is your first pick for prom?",
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
    "f you had to choose between dating someone ugly who was good in bed or dating someone hot who was bad in bed, which would you choose?",
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
    "If a girl/boy you didn't like had a crush on you, how would you act around her?",
    `What is a secret you kept from your parents?`,
    `Where is the weirdest place you've ever gone to the bathroom?`,
    `What is the most food you've ever eaten in a single sitting?`,
    `Which player would survive a zombie apocalypse and which would be the first to go?`,
    `Reveal all the details of your first kiss.`,
    `What excuse have you used before to get out plans with a friend?`,
    `What's the longest you've ever slept?`,
    `Read the last thing you sent your best friend or significant other out loud.`,
    `When was the last time you lied?`,
    `What five things would you bring to a desert island?`,
    `What's the most embarrassing thing you ever did on a date?`,
    `How many selfies do you take a day?`,
    `What animal do you think you most look like?`,
    `What is one thing you would stand in line for an hour for?`,
    `What's the most embarrassing top-played song on your phone?`,
    `If you could be a fictional character for a day, who would you choose?`,
    `What's one silly thing you can't live without?`,
    `What is the weirdest trend you've ever participated in?`,
    `If you could only listen to one song for the rest of your life, what would you choose?`,
    `What person do you text the most?`,
    `Have you ever been fired from a job?`,
    `What is the biggest lie you ever told your parents?`,
    `Which player knows you the best?`,
    `What is your worst habit?`,
    `How many stuffed animals do you own?`,
    `Tell us your most embarrassing vomit story.`,
    `Have you ever accidentally hit something (or someone!) with your car?`,
    `Name someone you’ve pretended to like but actually couldn’t stand.`,
    `What’s your most bizarre nickname?`,
    `What bridges are you glad that you burned?`,
    `What’s the craziest thing you’ve done on public transportation?`,
    `If you could write anyone on Earth in for President of the United States, who would it be and why?`,
    `What’s the meanest thing you’ve ever said to someone else?`,
    `Who was your worst kiss ever?`,
    `What’s one thing you’d do if you knew there no consequences?`,
    `What’s the craziest thing you’ve done in front of a mirror?`,
    `What’s something you love to do with your friends that you’d never do in front of your partner?`,
    `What do your favorite pajamas look like?`,
    `Have you ever faked sick to get out of a party/school?`,
    `Who’s the oldest person you’ve dated?`,
    `How many times a week do you wear the same pants?`,
    `Would you date your high school crush today?`,
    `Where are you ticklish?`,
    `What’s one movie you’re embarrassed to admit you enjoy?`,
    `When’s the last time you apologized? What for?`,
    `How do you really feel about the Twilight saga?`,
    `Have you ever peed in a pool?`,
    `What’s the weirdest place you’ve ever grown hair?`,
    `If you were guaranteed to never get caught, who on Earth would you murder?`,
    `What’s the cheapest gift you’ve ever gotten for someone else?`,
    `What app do you waste the most time on?`,
    `What’s the weirdest thing you’ve done on a plane?`,
    `Have you ever been nude in public?`,
    `How many gossip blogs do you read a day?`,
    `Have you ever picked your nose in public?`,
    `What’s your most embarrassing late night purchase?`,
    `Which of your family members annoys you the most and why?`,
    `What is your greatest fear in a relationship?`,
    `What’s your biggest pet peeve about the personw who answered before you?`,
    `Have you ever seen a dead body?`,
    `What celebrity do you think is overrated?`,
    `What’s the longest you’ve gone without brushing your teeth?`,
    `What’s your biggest regret in life?`,
    `Describe the weirdest thing you’ve ever done while drunk.`,
    `Have you ever regifted a present?`,
    `Do you still have feelings for any of your exes?`,
    `What’s the smallest tip you’ve ever left at a restaurant?`,
    `What’s one job you could never do?`,
    `Have you ever ghosted a friend?`,
    `When’s the last time you got dumped?`,
    `What’s the most childish thing you still do?`,
    `When’s the last time you dumped someone?`,
    `If you had to pick someone in this server to be your partner on a game show, who would it be and why?`,
    `Have you ever lied for a friend?`,
    `When’s the last time you made someone else cry?`,
    `What’s the most embarrassing thing you’ve done in front of a crowd?`,
    `If you could become invisible, what’s the worst thing you’d do?`,
    `After you’ve dropped a piece of food, what’s the longest time you’ve left it on the floor before eating it?`,
    `If you could date two people at once, would you do it? If so, who?`,
    `What’s something that overwhelms you?`,
    `What was the greatest day of your life?`,
    `What’s one useless skill you’d love to learn anyway?`,
    `If I went through your cabinets, what’s the weirdest thing I’d find?`,
    `Have you ever farted and blamed it on someone else?`,
    `What’s your favorite number? And why?`,
    `What’s something you would die if your mom found out about?`,
    `If you could set anyone here up with your best friend, who would it be and why?`,  
    `How often do you wash your sheets?`,
    `Have you ever farted in an elevator?`,
    `Who was your first love?`,
    `Are you scared of getting old?`,
    `If you had one week to live and you had to marry someone in this server, who would it be?`,
    `What’s the last movie that made you cry?`,
    `What’s the most sinful thing you’ve done in a house of worship?`,
    `Who would call you to help bury a body? Would you do it?`,
    `What’s your favorite possession?`,
    `Has anyone ever walked in on you in the bathroom?`,
    `Who in this group would you want to swap lives with for a week?`,
    `What was your biggest fear as a child?`,
    `What’s the most embarrassing thing your parents have caught you doing?`,
    `Name a band you only pretend to like.`,
    `What’s the last song that made you cry?`,
    `Have you ever had a wardrobe malfunction?`,
    `What’s the last thing you Googled?`,
    `What is that one thing you would never do for all the money in the world?`,
    `Who is your favorite person in your immediate family?`,
    `If you could only hear one song for the rest of your life, what would it be?`,
    `What’s the last YouTube video you watched? Post it!`,
    `When’s the last time you peed your pants?`,
    `Who in this room would be your one phone call if you were in jail?`,
    `Who do you most often text on the toilet?`,
    `What’s the craziest thing you’ve ever done in a movie theater?`,
    `What’s the craziest thing that has happened to you in a mall?`,
    `How long was your longest relationship?`,
    `Have you ever been arrested?`,
    `Who’s the most surprising person to ever slide into your DMs?`,
    `Where’s one place you’re dying to visit?`,
    `What word do you hate the most?`,
    `What’s the most embarrassing thing you’ve ever posted on social media (including reddit)?`,
    `Have you ever kept a library book? For how long?`,
    `If you could hire someone to do one thing for you, what would it be?`,
    `Would you ever consider being a nudist?`,
    `What’s the best lie you’ve ever told anyone?`,
    `What’s your most embarrassing childhood memory?`,
    `Have you ever pretended to not get a text to get out of doing something?`,
    `What’s the weirdest thing you’ve ever done in a bathroom?`,
    `What’s the most insane thing you’ve done to get out of a speeding ticket?`,
    `Do you have any hidden talents? What are they?`,
    `When’s the last time you got caught in a lie?`,
    `What do you think happens when you die?`,
    `When’s the last time you watched an adult movie?`,
    `Have you ever been in a fight?`,
    `Would you marry someone rich even if you weren’t in love with them?`,
    `Have you ever been caught checking someone out?`,
    `What’s the worst advice you’ve ever given someone else?`,
    `What’s the worst advice someone else has ever given you?`,
    `Would you volunteer as tribute for anyone in this room in The Hunger Games?`,
    `Who’s the last person who called you?`,
    `When’s the last time you wanted to hit somebody?`,
    `What’s the grossest smell that you secretly enjoy?`,
    `What’s the biggest prank you’ve ever played on someone?`,
    `When was the last time you were really angry? Why?`,
    `What’s the grossest thing that you do alone?`,
    `What’s your favorite guilty pleasure song?`,
    `Would you ever get plastic surgery?`,
    `Have you ever had a near-death experience?`,
    `What’s a skill you wish you had?`,
    `Have you ever compromised your morals for money? How?`,
    `Who was the last person you said, “I love you” to?`,
    `What was your first heartbreak?`,
    `Have you ever broken someone’s heart?`,
    `Have you ever peed in the shower?`,
    `What’s the most bogus rumor you’ve ever heard about yourself?`,
    `What’s the most bogus rumor you’ve ever spread or heard about someone else?`,
    `Have you ever thrown up in public?`,
    `When’s the last time you got rejected?`,
    `What’s the most common misconception about you?`,

];
module.exports = function(msg, args){
const index = Math.floor(Math.random() * repliesTruth.length);
        msg.channel.send(repliesTruth[index]);
}