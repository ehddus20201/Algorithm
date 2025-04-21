function solution(rsp) {
    let result =[];
    const win = {
        "2":"0",
        "0":"5",
        "5":"2"
    }
    for(let i =0; i<rsp.length;i++){
        result.push(win[rsp[i]]);
    }
    return result.join("");
    
    
}