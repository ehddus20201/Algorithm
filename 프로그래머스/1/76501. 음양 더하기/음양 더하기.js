function solution(absolutes, signs) {
    let result =0;
    for(let i =0; i<signs.length;i++){
        if(signs[i]===false){
            absolutes[i]=-absolutes[i];
        }
    }
    for(let i =0; i<signs.length;i++){
        result+=absolutes[i];
    }
    return result;
}