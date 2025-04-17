function solution(n) {
    n = (n+'').split("");
    let result =[];
    for(let i =n.length-1; i>=0;i--){
        result.push(Number(n[i]));
    }
    return result;
}