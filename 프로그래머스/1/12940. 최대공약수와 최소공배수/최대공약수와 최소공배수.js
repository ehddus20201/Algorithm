function solution(n, m) {
    let max = 0;
    let min = 0;
    for(let i=1; i<=Math.min(n,m);i++){
        if(n%i===0&&m%i===0)
            max=i;
    }
    return [max,(n*m)/max];
        
    
}