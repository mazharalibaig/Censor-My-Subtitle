var fs = require('fs');

var Filter = require('bad-words'),
    filter = new Filter();

module.exports = function(uploadDestination) {

    const data = fs.readFileSync(uploadDestination,'utf8');

    fs.writeFileSync(uploadDestination,filter.clean(data));

};
