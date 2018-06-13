function multiple(x) {
    if (Number.isInteger(x / 3)) {
        console.log("Multiple on 3");
    } else if (Number.isInteger(x / 7)) {
        console.log("Multiple on 3 or 7");
    } else if (Number.isInteger(x / 3) && Number.isInteger(x / 7)) {
        console.log("Multiple on 3 or 7");
    } else {
        console.log("Not multiple on 3 or 7");
    }
}
    console.log(multiple(1));
    console.log(multiple(3));
    console.log(multiple(49));