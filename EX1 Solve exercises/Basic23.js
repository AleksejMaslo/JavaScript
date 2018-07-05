function string(str) {
    if (str.length<1) {
      return "Blank string!";
    } else {
        var change = str.substring(1, str.length - 1);
        var newString = str.charAt(str.length - 1) + change + str[0];
        return newString;
    }
}

console.log(string(""));
console.log(string("Pye"));
console.log(string("Eyp"));
console.log(string("Write a JavaScript"));