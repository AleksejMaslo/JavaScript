function find_duplicate(arr1) {
    obj = {};
    for (i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = 0;
    }
}

var arr1 = [3, 1, 7, 6, 5, -4, -3, 2, 1];
console.log(find_duplicate(arr1));
