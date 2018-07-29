function replaceCharacter(str, position, char) {
    var before_index = str.substring(0, position);
    var after_index = str.substring(position+1, str.length);
    var new_str = before_index+char+after_index;
    return new_str;
}

console.log(replaceCharacter("We need replaxe!", 13, 'c'));
