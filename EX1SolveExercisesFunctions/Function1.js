function reverse(x) {
    var y = x.toString();
    var z = y.split("").reverse().join("");
    var new_number = Number(z);
    return new_number;
}

console.log(reverse(54321));
console.log(reverse(98765));