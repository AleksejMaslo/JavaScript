function upper_case (str) {
    return str.charAt(0).toUpperCase()+str.charAt(4).toUpperCase()+str.charAt(10).toUpperCase()+ str.charAt(16).toUpperCase();
}

console.log(upper_case("the quick brown fox"));