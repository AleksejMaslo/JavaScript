function check(x, y) {
    if (x > 0 && y > 0) {
        console.log("Positive value x " + "Positive value y");
    } else if (x > 0 && y < 0) {
        console.log("Positive value x " + "Negative value y");
    } else if (x < 0 && y > 0) {
        console.log("Negative value x " + "Positive value y");
    } else {
        console.log("Negative value x " + "Negative value y");
    }
}

console.log(check(-1,-1));
console.log(check(1,1));
console.log(check(49,-32));
