function string(str) {
    if (str.substr(0, 4) === "Java") {
        return str;
    } else {
        return false;
}
}

console.log(string("JavaScript"));
console.log(string("Write a JavaScript"));