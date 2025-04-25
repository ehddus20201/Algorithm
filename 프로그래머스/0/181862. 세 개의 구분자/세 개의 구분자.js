function solution(myStr) {
    myStr = myStr.split(/a|b|c/);
    myStr = myStr.filter((a)=>a!=="");
    if(myStr.length===0){
        return ["EMPTY"];
    }
    return myStr;
}