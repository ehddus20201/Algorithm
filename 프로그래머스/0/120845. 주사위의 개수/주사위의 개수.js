function solution(box, n) {
    let cntDice = 1;
    const [x,y,z] = box;
    cntDice *= (Math.floor(x/n));
    cntDice *= (Math.floor(y/n));
    cntDice *= (Math.floor(z/n));
    return cntDice;
}