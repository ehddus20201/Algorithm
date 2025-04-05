function solution(n) {
    let sqrtnum=Math.sqrt(n);
    if(sqrtnum%1===0){
        return 1;
    }
    return 2;
}