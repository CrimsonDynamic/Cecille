const fetch = require('node-fetch');
module.exports = async function(msg, args){
    keywords = args;
    let url = `https://www.google.com/search?sxsrf=ALeKk00iBRIn_5z-XSV5jJLM10rb5Pe2Cg:1610982046267&source=hp&ei=nqIFYM3DDezTgweZ3rX4BQ&q=test&oq=test&gs_lcp=CgZwc3ktYWIQAzIHCAAQyQMQQzIHCAAQChCRAjIECAAQQzIECAAQQzIECAAQQzIECAAQQzIECAAQQzICCAAyAggAMgIIADoHCCMQ6gIQJzoECCMQJzoICAAQyQMQkQI6BQgAEJECOgoILhDHARCjAhBDUIwpWJUtYIcuaAFwAHgAgAFViAGzApIBATSYAQCgAQGqAQdnd3Mtd2l6sAEK&sclient=psy-ab&ved=0ahUKEwjNiuvk36XuAhXs6eAKHRlvDV8Q4dUDCAk&uact=5`
    let respone = await fetch(url);
    let json = await respone.json();
    console.log(json);
    let index = Math.floor(Math.random() * json.results.length);
    msg.channel.send(json.results[index].url);
}