var fs = require('fs');

fs.readdir(".", (err, filenames) => {

    for (var i = 0; i < filenames.length; i++) {
        console.log(filenames[i]);
    }

    console.log("Ready.");
});
