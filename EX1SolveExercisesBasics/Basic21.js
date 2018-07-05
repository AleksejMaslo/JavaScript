function string(str) {
    if (str.substr(0, 2) === "Py") {
        return str;
    } else {
        return "Py" + str;
    }
}

console.log(string("Pye"));
console.log(string("e"));
console.log(string(""));
