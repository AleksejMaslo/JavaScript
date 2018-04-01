var fs = require('fs');
var contents = fs.readFileSync('taxiDrivers.json', 'utf8');
var obj = JSON.parse(contents);
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
var table = "<table>" + tableHeader + tableContent + "</table>"; //тут ты должен сам составить строку, соединяя данные из полей объекта с водителями
var body = "<body>" + table + "</body>";
var html = "<html>" + body + "</html>";
var http = require('http');
http.createServer(function (req, res) {
    res.write(html);
    res.end();
}).listen(8080);