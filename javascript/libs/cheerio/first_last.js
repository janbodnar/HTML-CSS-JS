const cheerio = require('cheerio');
const request = require('request');

request({
    method: 'GET',
    url: 'http://localhost:8000'
}, function(err, res, body) {

    if (err) return console.error(err);

    let $ = cheerio.load(body);

    let main = $('main');

    let fel = main.children().first();
    let lel = main.children().last();

    console.log(fel.get(0).name);
    console.log(lel.get(0).name);
});
