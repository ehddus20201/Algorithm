function solution(quiz) {
    let answer =0;
    let result = [];
    for(let i =0; i<quiz.length;i++){
        
        
        
        let plbm=quiz[i].split(" ");
        if(plbm[1]==='+')
            answer=Number(plbm[0])+Number(plbm[2]);
        else
            answer=Number(plbm[0])-Number(plbm[2]);
        if(answer===Number(plbm[4]))
            result.push("O");
        else 
            result.push("X");
        
        
            
}
    return result;
}