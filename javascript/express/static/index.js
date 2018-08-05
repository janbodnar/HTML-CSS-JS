const express = require("express");
const path = require("path");

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
    res.statusCode = 404;
    res.end("404 - page not found");
});

app.listen(3000, () => {

    console.log("Application started on port 3000");
});
