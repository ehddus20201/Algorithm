function solution(my_str, n) {
    let result =[];
    let a=n;
    for(let i =0; i<my_str.length;i+=a){
        result.push(my_str.slice(i,i+a));
    }
    return result;
}