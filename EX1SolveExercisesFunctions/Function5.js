function upper_case (str) {
    var arr = str.split(' ');
    var newArray = [];
    for (var i = 0; i < arr.length; i++) {
        newArray.push(arr[i].charAt(0).toUpperCase()+arr[i].slice(1));
    }
    return newArray.join(' ');
}

console.log(upper_case("the quick brown fox"));