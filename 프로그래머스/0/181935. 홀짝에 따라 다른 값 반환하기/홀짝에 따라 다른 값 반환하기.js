function solution(n) {
    let odd = 0;
    let even = 0;
    for(let i =0; i<=n; i++){
        if(i%2===1){
            odd+=i;
            
        }
        else{
            even+=i**2;
        }
    }
    
    return n%2===1 ? odd : even;
    
}
