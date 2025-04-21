function solution(num_list) {
    for(let i =0; i<num_list.length;i++){
        if(Math.abs(num_list[i])!==num_list[i]){
            return i;
        }
    }
    return -1;
}