function solution(n) {
    let answer= 0;
    strN = String(n);
    for(let i=0;i<strN.length;i++){
        answer+=Number(strN[i]);
    }
    return answer;
}