function solution(n) {
    let result = new Array(n);
    for(let i = 0; i < n; i++){
        result[i] = new Array(n).fill(0);
    }
    
    for(let j = 0; j < n; j++){
        result[j][j]=1;
    }
    return result;
}