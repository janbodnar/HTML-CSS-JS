const express = require("express");
const path = require("path");

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.set('views', path.resolve(__dirname, "views"));
app.set('view engine', 'ejs');

app.get("/today", (req, res) => {

    let today = new Date();
    res.render("show_date", {now: today});
});

app.use((req, res) => {
    res.statusCode = 404;
    res.end("404 - page not found");
});

app.listen(3000, () => {

    console.log("Application started on port 3000");
})
