

function solution(n) {
    function fac(num){
    let facResult = 1;
        
    for(let cnt = 1; cnt < num + 1; cnt++){
        facResult *=cnt;
    }
        return facResult;
        
    }
    let num = 1;
    for(let i = 0; i<10; i++){
        if(n>=fac(num) && n<fac(num+1)){
            return num;
            }
        num++;
    }
}