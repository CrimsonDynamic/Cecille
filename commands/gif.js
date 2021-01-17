const fetch = require('node-fetch');
module.exports = async function (msg, args){
keywords = args;
let url = `https://api.tenor.com/v1/search?q=${keywords}&key=${process.env.TENOR_KEY}&limit=30`
let respone = await fetch(url);
let json = await respone.json();
console.log(json);
let index = Math.floor(Math.random() * json.results.length);
msg.channel.send(json.results[index].url);
//msg.channel.send("Gif from Tenor " + keywords);
};