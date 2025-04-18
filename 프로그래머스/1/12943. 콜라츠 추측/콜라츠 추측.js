function solution(num) {
    if(num===1)
        return 0;
    let cnt = 0;
    while(cnt!==500&&num!==1){
    if(num%2===0){
        num/=2;
        cnt++;
        }
    else if(num%2===1){
        num=num*3+1;
        cnt++;
        }
    }
    return num === 1 ? cnt: -1; 
    
}