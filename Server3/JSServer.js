var fs = require('fs');
var jsContent = fs.readFileSync('JSBrowser.js', 'utf8');
var html = fs.readFileSync('HTML3.html', 'utf8');
var contents = fs.readFileSync('taxiDrivers.json', 'utf8');
var http = require('http');
http.createServer(function (req, res) {
    if (req.url === "/JSBrowser.js") {
        res.write(jsContent);
    } else if (req.url === "/taxiDrivers.json"){
        res.write(contents);
    } else {
        res.write(html);
    }
    res.end();
}).listen(8080);