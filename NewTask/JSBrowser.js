function sendRequest(locale) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.responseText);
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
            document.getElementById("drivers").innerHTML = table;
        }
    };
    xhttp.open("GET", "taxiDrivers_"+locale+".json", true);
    xhttp.send();
}
function loadUADrivers() {
    sendRequest("UA");
}
function loadENDrivers() {
    sendRequest("EN");
}
sendRequest("EN");