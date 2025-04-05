function solution(n) {
    let result = 0;
    let real = 0;
    
    for(let cnt = n; cnt>=1; cnt--){
        let isCount = false;
        
        for(let i =2; i<cnt; i++){
            if(cnt%i===0){
                isCount = true;
            }        
        }
        if(isCount)
            result+=1;
    }
    
    return result;
}