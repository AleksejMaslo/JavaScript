function check(x, y) {
    if (x > 0 && y > 0) {
        return "Positive value x " + "Positive value y";
    } else if (x > 0 && y < 0) {
        return "Positive value x " + "Negative value y";
    } else if (x < 0 && y > 0) {
        return "Negative value x " + "Positive value y";
    } else {
        return "Negative value x " + "Negative value y";
    }
}

console.log(check(-1,-1));
console.log(check(1,1));
console.log(check(49,-32));
