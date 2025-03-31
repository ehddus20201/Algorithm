function solution(num_list) {
    let new_list = [];
    let cnt = num_list.length - 1;
    while(cnt >= 0){
        new_list.push(num_list[cnt])
        cnt = cnt - 1;
        
    }
        return new_list;
}