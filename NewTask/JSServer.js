var fs = require('fs');
var jsContent = fs.readFileSync('JSBrowser.js', 'utf8');
var html = fs.readFileSync('HTML3.html', 'utf8');
var contentsEN = fs.readFileSync('taxiDrivers_EN.json', 'utf8');
var contentsUA = fs.readFileSync('taxiDrivers_UA.json', 'utf8');
var http = require('http');
http.createServer(function (req, res) {
    if (req.url === "/JSBrowser.js") {
        res.write(jsContent);
    } else if (req.url === "/taxiDrivers_EN.json"){
        res.write(contentsEN);
    } else if (req.url === "/taxiDrivers_UA.json"){
        res.write(contentsUA);
    } else {
        res.write(html);
    }
    res.end();
}).listen(8080);