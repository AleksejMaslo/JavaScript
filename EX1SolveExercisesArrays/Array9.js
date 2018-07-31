function upper_case(str) {
    var array = str.split(" ");
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        newArray.push(array[i].charAt(0) + array[i].slice(1).toUpperCase())
    }
    return newArray.join(' ');
}


console.log(upper_case("the quick brown fox"));