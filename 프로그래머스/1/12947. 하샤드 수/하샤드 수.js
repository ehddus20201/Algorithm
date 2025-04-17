function solution(x) {
    x=String(x);
    let total = 0;
    for(let i =0; i<x.length;i++){
        total+=Number(x[i]);
    }
    if (x%total===0)
        return true;
    return false;
}