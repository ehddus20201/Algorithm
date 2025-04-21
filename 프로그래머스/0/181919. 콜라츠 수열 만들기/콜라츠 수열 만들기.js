function solution(n) {
    let result =[];
    while(n!==1){
        if(n%2===0){
            result.push(n);
            n/=2;
        }
        else if(n%2===1){
            result.push(n);
            n=n*3+1;
        }
    }
    result.push(n);
    return result;
}