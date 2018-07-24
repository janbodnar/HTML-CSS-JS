const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, {"Content-Type": "text/plain"});
    res.end("Hello there\n");
});

server.listen(8000);

console.log("Server running at http://127.0.0.1:8000/");
