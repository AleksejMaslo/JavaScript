function string (str) {
 if (str.split("").reverse().join("") === str){
     return true;
 }   else {
     return false;
 }
}

console.log(string("madam"));
console.log(string("tree"));
console.log(string("hannah"));
