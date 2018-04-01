var fs = require('fs');
var contents = fs.readFileSync('taxiDrivers.json', 'utf8');
var html = fs.readFileSync('DriversNew.html', 'utf8');
var obj = JSON.parse(contents);
var re = /<table drivers\/>/gi;
var tableHeader =
    "<tr>" +
    "<th>" + "id" + "</th>" +
    "<th>" + "name" + "</th>" +
    "<th>" + "license" + "</th>" +
    "<th>" + "rate" + "</th>" +
    "</tr>";
var tableContent = "";
for (var i = 0; i < obj.drivers.length; i++) {
    console.log(obj.drivers[i]);
    tableContent = tableContent + "<tr>" +
        "<td>" + obj.drivers[i].id + "</td>" +
        "<td>" + obj.drivers[i].name + "</td>" +
        "<td>" + obj.drivers[i].license + "</td>" +
        "<td>" + obj.drivers[i].rate + "</td>" +
        "</tr>";
}
var table = "<table>" + tableHeader + tableContent + "</table>";
var newhtml = html.replace(re, table);
var http = require('http');
http.createServer(function (req, res) {
    res.write(newhtml);
    res.end();
}).listen(8080);