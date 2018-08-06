const express = require("express");
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.post("/info", (req, res) => {

    var name = req.body.name;
    var age = req.body.age;
  
    res.send(`you have specified: ${name} and ${age}`);
});

app.listen(3000, () => {

    console.log("Application started on port 3000");
});
