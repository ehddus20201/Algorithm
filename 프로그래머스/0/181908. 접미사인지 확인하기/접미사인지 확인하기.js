function solution(my_string, is_suffix) {
    my_string=my_string.slice("");
    is_suffix=is_suffix.slice("");
    if(my_string.slice(my_string.length-is_suffix.length)===is_suffix)
        return 1;
    return 0;
}