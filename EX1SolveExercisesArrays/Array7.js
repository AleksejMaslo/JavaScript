var array = [3, 1, 7, 6, 5, -4, -3, 2, 1];

function BubbleSort(array) {
    var n = array.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - 1 - i; j++) {
            if (array[j + 1] < array[j]) {
                var t = array[j + 1];
                array[j + 1] = array[j];
                array[j] = t;
            }
        }
    }
    return array;
}
