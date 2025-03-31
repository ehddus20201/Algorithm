function solution(num_list) {
    let new_list = [];
    let cnt = 0;
    let listlen = num_list.length;
    while(num_list.length>cnt){
        new_list.push(num_list[listlen-1])
        cnt = cnt + 1;
        listlen = listlen - 1;
    }
        return new_list;
}