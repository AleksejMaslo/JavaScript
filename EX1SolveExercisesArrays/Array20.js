var arr = [3, 1, 3, 3, 5, -4, -3, 2, 1];

function find_duplicate(arr) {
    var temp = {};

    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (temp.hasOwnProperty(element)) {
            temp[element] += 1;
        } else {
            temp[element] = 1;
        }
    }
    console.log(JSON.stringify(temp));

    var duplicate_element;
    for (var prop in temp) {
        if (!duplicate_element) {
            duplicate_element = prop;
        } else {
            duplicate_element = temp[prop] > temp[duplicate_element] ? prop : duplicate_element;
        }
    }
    console.log(duplicate_element+" ("+temp[duplicate_element]+ " times)")
}

find_duplicate(arr);
