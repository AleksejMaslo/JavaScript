function string(x) {
    if (x.substr(0, 2) === "Py") {
        console.log(x);
    } else {
        console.log("Py" + x);
    }
}

console.log(string("Pye"));
console.log(string("e"));
console.log(string(""));
