function replaceCharacter(str, position, char) {
    var before_index = str.substring(0, 13);
    var after_index = str.substring(14, str.length);
    var new_str = before_index+char+after_index;
    return new_str;
}

console.log(replaceCharacter("We need replaxe!", 11, 'c'));
