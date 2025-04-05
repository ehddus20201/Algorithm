function solution(rsp) {
    const win = {
        "2":"0",
        "0":"5",
        "5":"2"
    }
    
    let answer ="";
    
    for(let cnt = 0; cnt<rsp.length; cnt++){
        const item = rsp[cnt];
        answer+=win[item];
    }
    return answer;
}