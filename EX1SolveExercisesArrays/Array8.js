var array = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function most_frequent(array) {
    var temp = {};
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (temp.hasOwnProperty(element)) {
            temp[element] += 1;
        } else {
            temp[element] = 1;
        }
    }
    console.log(JSON.stringify(temp));
    var max_element;
    for (var prop in temp) {
        if (!max_element) {
            max_element = prop;
        } else {
            max_element = temp[prop] > temp[max_element] ? prop : max_element;
        }
    }
    console.log(max_element+" ("+temp[max_element]+ " times)")
}

most_frequent(array);
