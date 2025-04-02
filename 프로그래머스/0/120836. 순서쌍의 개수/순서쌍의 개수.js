function solution(n) {
    let count = 0;
    for(let cnt =n; cnt>0; cnt--){
    if(n%cnt===0){
        count = count + 1;
    }
    }
    return count;
}