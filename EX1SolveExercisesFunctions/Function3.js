function combination (str) {
    for (var combination in str) {
        return(str[combination]);
    }
}

console.log(combination("madam"));
console.log(combination("tree"));