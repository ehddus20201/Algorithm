function solution(my_string, is_prefix) {
    my_string= my_string.slice("");
    is_prefix=is_prefix.slice("");
    
    
    if(my_string.slice(0,is_prefix.length)===is_prefix)
        return 1;
    return 0;
}