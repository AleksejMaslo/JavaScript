function array_Clone(array) {
    var array = str.split(" ");
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray.join(' ');
}

console.log([1, 2, 4, 0]);