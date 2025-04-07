function solution(my_string) {
    let splitString = my_string.split(" ");
    let answer = Number(splitString[0]);
    for(let i = 0; i<splitString.length;i++){
        if(splitString[i]==='+')
            answer+=Number(splitString[i+1]);
        else if(splitString[i]==='-')
            answer-=Number(splitString[i+1]);
             
    }
    return answer
}