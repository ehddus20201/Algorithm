function solution(a, b, n) {
    let totalCola = 0;
    while((n/a)>1){
        totalCola+=b*(Math.floor(n/a));
        n=n%a+b*Math.floor(n/a);
        
    
    }
    return totalCola+b*(Math.floor(n/a));
}