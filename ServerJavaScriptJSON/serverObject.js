var fs = require('fs');
var contents = fs.readFileSync('taxiDrivers.json', 'utf8');
var obj = JSON.parse(contents);
console.log(obj);
var rate = [4.4, 3.4, 4.99, 1.99, 2.79];
rate.sort();
console.log(rate);

function sortDrivers (leftRate, rightRate) {
    return leftRate.rate > rightRate.rate;
}
var objFunction = sortDrivers;
console.log(objFunction);
console.log(obj.toString());
console.log(obj.drivers.toString());

obj.drivers.sort(sortDrivers);
console.log(obj);