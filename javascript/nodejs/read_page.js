const http = require('http');

const request = http.request({ hostname: 'www.webcode.me' }, (res) => {
    
    res.setEncoding('utf8');
    res.on('data', (chunk) => {
      
        console.log(chunk);
    });
});

request.end();

request.on('error', (err) => {
    
    console.log("Error occured\n");
    console.error(err);
});
