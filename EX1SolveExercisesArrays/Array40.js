function array_range(start, lenght) {
    newArray = [];
    for (var i = 0; i < lenght; i++, start++) {
        newArray[i]=start;
    }
return newArray;
}

console.log(array_range(1, 4));
console.log(array_range(6, 4));