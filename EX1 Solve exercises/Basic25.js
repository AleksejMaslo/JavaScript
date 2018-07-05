function multiple(x) {
    if (Number.isInteger(x / 3) && Number.isInteger(x / 7)) {
        return "Multiple on 3 and 7";
    } else if (Number.isInteger(x / 7)) {
        return "Multiple on 7";
    } else if (Number.isInteger(x / 3)) {
        return "Multiple on 3";
    } else {
        return "Not multiple on 3 or 7";
    }
}
console.log(multiple(1));
console.log(multiple(3));
console.log(multiple(49));
console.log(multiple(21));