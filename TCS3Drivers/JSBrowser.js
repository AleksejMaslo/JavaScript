"use strict";

var drivers = [];

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

    console.log("drivers " + JSON.stringify(newDriver));
    addDriverRequest(newDriver, countryValue);
}

function addDriverRequest(newDriver, countryValue) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", '/drivers', true);

    xhr.onreadystatechange = function () {//Call a function when the state changes.
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            console.log("adding drivers success");// Request finished. Do processing here.
        } else {
            console.log("Error");
        }
    };
    xhr.send(JSON.stringify(newDriver));
}

function editDrivers() {
    for (var j = 0; i < serverResponse.drivers.length; i++) {
        var serverResponse = JSON.parse(this.responseText);
        drivers[j].id = document.getElementById('id').value;
        drivers[j].name = document.getElementById('name').value;
        drivers[j].license = document.getElementById('license').value;
        drivers[j].rate = document.getElementById('rate').value;
    }
    console.log("edited driver: " + drivers[0].id + " " + drivers[0].name + " " + drivers[0].license + " " + drivers[0].rate);
}

function editDriverRequest(changedDriver, countryValue) {
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", '/drivers', true);

    xhr.onreadystatechange = function () {//Call a function when the state changes.
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            console.log("adding drivers success");// Request finished. Do processing here.
        } else {
            console.log("Error");
        }
    };
    xhr.send(JSON.stringify(changedDriver));
}

function deleteDrivers() {
    delete drivers.id[0];
}

/*function deleteDriverRequest(changedDriver) {
    var xhr = new XMLHttpRequest();
    xhr.open("PUT", '/drivers', true);

    xhr.onreadystatechange = function () {//Call a function when the state changes.
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            console.log("adding drivers success");// Request finished. Do processing here.
        } else {
            console.log("Error");
        }
    };
    xhr.send(JSON.stringify(changedDriver));
}*/

function sendRequest(locale) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var serverResponse = JSON.parse(this.responseText);
            drivers = serverResponse.drivers;
            var tableHeader =
                "<tr>" +
                "<th>" + "id" + "</th>" +
                "<th>" + "name" + "</th>" +
                "<th>" + "license" + "</th>" +
                "<th>" + "rate" + "</th>" +
                "</tr>";
            var tableContent = "";
            for (var i = 0; i < serverResponse.drivers.length; i++) {
                console.log(serverResponse.drivers[i]);
                tableContent = tableContent + "<tr>" +
                    "<td>" + serverResponse.drivers[i].id + "</td>" +
                    "<td>" + serverResponse.drivers[i].name + "</td>" +
                    "<td>" + serverResponse.drivers[i].license + "</td>" +
                    "<td>" + serverResponse.drivers[i].rate + "</td>" +
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