var fs = require('fs');
var contents = fs.readFileSync('taxiDrivers.json', 'utf8');
var obj = JSON.parse(contents);
console.log(obj);
obj.myfield='My super field';
console.log(obj);
obj.drivers[0].name="Alex";
console.log(obj);
fs.writeFileSync("C:/Target/taxiDrivers2.json",JSON.stringify(obj));