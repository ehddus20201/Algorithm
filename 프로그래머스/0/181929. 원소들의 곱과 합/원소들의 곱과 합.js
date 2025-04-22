function solution(num_list) {
    let mul = 1;
    let sum =0;
    for(let i =0; i<num_list.length;i++){
        mul*=num_list[i];
        sum+=num_list[i];
    }
    return mul<sum**2 ? 1 : 0;
}