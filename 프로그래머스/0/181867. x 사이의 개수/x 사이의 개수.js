function solution(myString) {
    let gap = myString.split("x");
    for(let i =0; i<gap.length;i++){
        gap[i]=gap[i].length;
    }
    return gap;
}