function solution(my_string, k) {
    let result ='';
    for(let i =0; i<k;i++){
        result = result.concat(my_string);
    }
    return result;
}