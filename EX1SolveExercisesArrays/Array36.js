function array_filled(x, y) {
    var newArray = [];
    while (newArray.length<x) {
        var i =y;
        newArray.push(i);
        i++;
    }
    return newArray
}


console.log(array_filled(4, 11));
console.log(array_filled(6, 0));
