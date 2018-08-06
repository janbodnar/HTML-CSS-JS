const express = require("express");
const path = require('path');

const app = express();

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get("/info", (req, res) => {

    let name = req.param('name');
    let age = req.param('age');
  
    res.send(`you have specified: ${name} and ${age}`);
});

app.listen(3000, () => {

    console.log("Application started on port 3000");
});
