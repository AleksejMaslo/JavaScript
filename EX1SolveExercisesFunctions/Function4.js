function alphabetical_order (str) {
    return str.split('').sort().join('');
}

console.log(alphabetical_order("madam"));
console.log(alphabetical_order("tree"));