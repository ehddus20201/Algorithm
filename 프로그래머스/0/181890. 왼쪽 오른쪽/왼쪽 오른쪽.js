function solution(str_list) {
    let answer = [];
    for(let i = 0; i<str_list.length; i++){
        if(str_list[i]==="l"){
            for(let j=0; j<i; j++){
                answer.push(str_list[j]);
            }
            return answer;
        }
        else if(str_list[i]==="r"){
            for(let k=i+1; k<str_list.length; k++){
                answer.push(str_list[k]);
            }
            return answer;
        }
    }
    return answer;
    
}