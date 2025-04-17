function solution(s){
    let pCnt = 0;
    let yCnt = 0;
    for(let i =0; i<s.length;i++){
        if(s[i]==="p"||s[i]==="P"){
            pCnt++;
        }
        else if(s[i]==="y"||s[i]==="Y"){
            yCnt++;
        }
    }
    if(pCnt === yCnt)
        return true;
    return false;
}