function solution(before, after) {
    let splitBefore = before.split("");
    let splitAfter = after.split("");
    let cnt = 0;
    for(let i = 0; i < before.length; i++){
        for(let j = 0; j < before.length; j++){
            if(splitBefore[i]===splitAfter[j]){
                splitAfter[j]= ' ';
                cnt +=1;
                break;
            }
        }
    }
    
    if(cnt===before.length)
        return 1
    return 0;
}