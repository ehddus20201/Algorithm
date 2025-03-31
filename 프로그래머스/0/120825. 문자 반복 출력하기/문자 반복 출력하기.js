function solution(my_string, n) {
    let strlen=my_string.length - 1;
    let new_str= "";
    let cnt2 = 0;
    while(strlen >= 0){
        let cnt = 0;
        while(cnt < n){
            
            new_str += my_string[cnt2];
            cnt = cnt + 1;
        }
        cnt2 = cnt2 + 1;
        strlen = strlen - 1;
    }
    return new_str;
}
//1.