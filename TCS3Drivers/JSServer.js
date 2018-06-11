var fs = require('fs');
var jsContent = fs.readFileSync('JSBrowser.js', 'utf8');
var html = fs.readFileSync('HTML3.html', 'utf8');
var css = fs.readFileSync("Table.css", 'utf8');
var contentsEN = fs.readFileSync('taxiDrivers_EN.json', 'utf8');
var contentsUA = fs.readFileSync('taxiDrivers_UA.json', 'utf8');
var http = require('http');
http.createServer(function (req, res) {
    if (req.url === "/JSBrowser.js") {
        res.write(jsContent);
    } else if (req.url === "/Table.css") {
        res.setHeader('content-type', 'text/css');
        res.write(css);
    } else if (req.url === "/taxiDrivers_EN.json") {
        res.write(contentsEN);
    } else if (req.url === "/taxiDrivers_UA.json") {
        res.write(contentsUA);
    } else if (req.url === "/drivers" && req.method === "GET") {
        console.log("Accept editing driver request");
    }
    else if (req.url === "/drivers" && req.method === "POST") {
        console.log("Accept adding driver request");
        var body = '';
        req.on('data', function (chunk) {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', function () {
            console.log(body);
            res.end('ok');
            //Здесь нужно обработать body и сохранить в файл
        });
    } else {
        res.write(html);
    }
    res.end();
}).listen(8080);