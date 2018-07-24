const fs = require('fs')

fs.readFile('words.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log("Script continues...")
