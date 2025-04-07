function solution(num, k) {
    let numStr = String(num);
    let idx = numStr.indexOf(k);
    if(idx === -1)
        return idx;
    return idx + 1;
    
}