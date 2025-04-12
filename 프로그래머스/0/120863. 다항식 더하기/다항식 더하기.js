function solution(polynomial) {
    let X = 0;
    let num = 0;
    polynomial=polynomial.split(" + ");
    for(let i =0; i<polynomial.length; i++){
        if(isNaN(Number(polynomial[i]))){
            if((polynomial[i])==='x'){
                X +=1;
                continue;
            }
            let replaced =polynomial[i].replace("x","");
            X +=Number(replaced);
        }
        else
            num+=Number(polynomial[i]);
    }
    
    if(X!==0 && num !==0)
        return  `${X===1 ? '':X}x + ${num}`;
    else if(X===0 && num !==0)
        return  `${num}`;
    else if(X!==0 && num ===0)
        return  `${X===1 ? '':X}x`;
    
        
        
}