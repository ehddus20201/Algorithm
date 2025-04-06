function solution(s) {
    var answer = 0;
    let tempStr = '';
    let lastnum =0;
    for(let i = 0; i < s.length; i++){
        if(s[i]==='Z'){
            answer-=lastnum;
            continue;
        }
        tempStr+=s[i];
        if(s[i]===' '){
            answer+=Number(tempStr);
            lastnum=Number(tempStr);
            tempStr ='';
        }
        
    }
    answer+=Number(tempStr);    
    return answer;
}