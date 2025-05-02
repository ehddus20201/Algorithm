function solution(q, r, code) {
    let result = [];
    for(let i = 0; i < code.length; i++){
        if(i%q===r){
            result.push(code[i]);
        }
    }
    return result.join("");
}