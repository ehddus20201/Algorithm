function solution(a, b) {
    let result = 0;
    if(a>b){
        for(let i =b; i<=a; i++){
        result += i;
        }
    }
    if(a<=b){
    for(let i =a; i<=b; i++){
        result += i;
        }
    }
    
    return result;
}