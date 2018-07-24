const fs = require('fs');

readDirContentSync('.');

console.log("Ready.");

function readDirContentSync(mydir) {

    const filenames = fs.readdirSync(mydir);

    for (var i = 0; i < filenames.length; i++) {
        console.log(filenames[i]);
    }
}
