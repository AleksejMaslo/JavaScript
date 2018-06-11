"use strict";

function addDrivers() {
    var idValue = document.getElementById('id').value;
    var nameValue = document.getElementById('name').value;
    var licenseValue = document.getElementById('license').value;
    var rateValue = document.getElementById('rate').value;
    var countryElement = document.getElementById("country");
    var countryValue = country.options[country.selectedIndex].value;

    var newDriver = {
        id: idValue, name: nameValue, license: licenseValue, rate: rateValue
    };

    idValue.push("");
    nameValue.push("");
    licenseValue.push("");
    rateValue.push("");
    console.log("drivers " + JSON.stringify(newDriver));
    addDriverRequest(newDriver, countryValue);
}

function addDriverRequest(newDriver, countryValue) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/drivers', true);

    xhr.onreadystatechange = function() {//Call a function when the state changes.
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            console.log("adding drivers success");// Request finished. Do processing here.
        } else {
            console.log("Error");
        }
    };
    xhr.send(JSON.stringify(newDriver));
}

function editDrivers() {
    var idValue = document.getElementById('id').value;
    var nameValue = document.getElementById('name').value;
    var licenseValue = document.getElementById('license').value;
    var rateValue = document.getElementById('rate').value;
    var countryElement = document.getElementById("country");
    var countryValue = country.options[country.selectedIndex].value;

    var changedDriver = {
        id: idValue, name: nameValue, license: licenseValue, rate: rateValue
    };

}
function editDriverRequest(changedDriver, countryValue) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", '/drivers', true);

    xhr.onreadystatechange = function() {//Call a function when the state changes.
        if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            console.log("adding drivers success");// Request finished. Do processing here.
        } else {
            console.log("Error");
        }
    };
    xhr.send(JSON.stringify(changedDriver));
}

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
    xhttp.open("GET", "taxiDrivers_" + locale + ".json", true);
    xhttp.send();
}

function loadUADrivers() {
    sendRequest("UA");
}

function loadENDrivers() {
    sendRequest("EN");
}

sendRequest("EN");