const cheerio = require('cheerio');
const request = require('request');

request({
    method: 'GET',
    url: 'http://localhost:8000'
}, function(err, res, body) {

    if (err) return console.error(err);

    let $ = cheerio.load(body);

    let title = $('title');

    console.log(title.text());
});
