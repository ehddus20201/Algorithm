function solution(num_list, n) {
    let a=num_list.splice(n);
    return a.concat(num_list)
}