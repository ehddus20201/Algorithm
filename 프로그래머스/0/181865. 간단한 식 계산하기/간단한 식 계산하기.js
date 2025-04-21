function solution(binomial) {
    binomial=binomial.split(" ");
    if(binomial[1]==="+"){
        return Number(binomial[0])+Number(binomial[2]);
    }else if(binomial[1]==="-"){
        return Number(binomial[0])-Number(binomial[2]);
    }else if(binomial[1]==="*"){
        return Number(binomial[0])*Number(binomial[2]);
    }
}