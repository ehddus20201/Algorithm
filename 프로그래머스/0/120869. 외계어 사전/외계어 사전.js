function solution(spell, dic) {
    let x =0;
    for(let i =0; i<dic.length;i++){
        x = 0;
        for(let j =0; j<spell.length;j++){
            if(dic[i].length===spell.length){
                if(dic[i].includes(spell[j])){
                    x+=1;
                }
                if(x===spell.length){
                    return 1;
                }
            }
        }
    }
    return 2;
}
// 