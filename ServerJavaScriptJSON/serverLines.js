var fs = require('fs');


var contents = fs.readFileSync('taxiDrivers.json', 'utf8');
console.log(contents);