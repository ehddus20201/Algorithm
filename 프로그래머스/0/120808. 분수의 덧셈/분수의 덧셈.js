function solution(numer1, denom1, numer2, denom2) {
    const numer=denom1*denom2;
    const denom=denom2*numer1+denom1*numer2;
    let min;
    
    if(denom>numer){
       min=numer;
    }
    else{
        min=denom;
    }
while(true){
    if(denom % min ===0){
        if(numer % min ===0){
        return [denom/min , numer/min];
             }
        }
    min=min-1;
    
    }
}