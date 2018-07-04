function string(x) {
    if (x.substr(0, 2) === "Py") {
        return x;
    } else {
        return "Py" + x;
    }
}

console.log(string("Pye"));
console.log(string("e"));
console.log(string(""));
