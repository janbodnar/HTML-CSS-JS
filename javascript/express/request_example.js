const express = require("express");

const app = express();

app.use((req, res, next) => {

    console.log(`HTTP method: ${req.method}`);
    console.log(`URL: ${req.url}`);
    console.log(`IP: ${req.ip}`);
    console.log(`Hostname: ${req.hostname}`);
    console.log(`Protocol: ${req.protocol}`);
    next();
});

app.get("/", (req, res) => {

    res.send("Hello there");
});

app.listen(3000, () => {

    console.log("Application started on port 3000");
});
