function upper_case (str) {
    return str.charAt(0).toUpperCase() + str.substring(1,3) + " " + str.charAt(4).toUpperCase() + str.substring(5,9) + " " +  str.charAt(10).toUpperCase() + str.substring(11,15) + " " + str.charAt(16).toUpperCase() + str.substring(17,str.length);
}

console.log(upper_case("the quick brown fox"));