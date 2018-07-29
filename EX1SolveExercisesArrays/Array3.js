function first(array, n) {
    if (!n){
        return array[0];
    }
    var array2 = [];
    var length = n>array.length ? array.length : n;
    for (var i = 0; i < length; i++) {
        array2.push(array[i]);
    }
    return array2;
}


console.log(first([7, 9, 0, -2]));
console.log(first([7, 9, 0, -2], 2));
console.log(first([],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
