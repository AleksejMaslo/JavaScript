var http = require('http');
var fs = require('fs');
var contents = fs.readFileSync('taxiDrivers.json', 'utf8');
http.createServer(function (req, res) {
    res.write(contents);
    res.end();
}).listen(8080);