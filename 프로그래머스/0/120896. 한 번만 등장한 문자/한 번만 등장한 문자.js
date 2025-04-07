function solution(s) {
    let tempStr = '';
    let answer =''
    for(let i = 0; i < s.length;i++){
        let cnt =0;
        tempStr=s[i];
        for(let j = 0; j<s.length;j++){
            if(s[j]===tempStr)
                cnt += 1;

        }
        if (cnt===1)
                answer+=tempStr;

    }
    answer = answer.split("");
    answer = answer.sort();
    answer = answer.join("");
    
    return answer;
}