function string(str) {
    if (str.length<3) {
        return "Not enough length!";
    } else {
        var newString = str.slice(-3) + str + str.slice(-3);
        return newString;
    }
}

console.log(string(""));
console.log(string("Pye"));
console.log(string("Eyp"));
console.log(string("Write a JavaScript"));