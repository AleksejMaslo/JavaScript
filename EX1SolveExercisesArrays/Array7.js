var arr = [3, 1, 7, 6, 5, -4, -3, 2, 1];

function bubbleSort(arr) {
    do {
        var swapped = false;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}

bubbleSort(arr);
console.log(arr);