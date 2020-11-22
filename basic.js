var fs = require('fs');

var Filter = require('bad-words'),
    filter = new Filter();

fs.readFile('readme.txt','utf8', (err,data) => {
    fs.writeFile('writeme.txt',filter.clean(data),() => {
        console.log("A new file has been created with the same name!!");
    });
});

console.log("Please Wait While Your subtitles are being cleaned\n");
