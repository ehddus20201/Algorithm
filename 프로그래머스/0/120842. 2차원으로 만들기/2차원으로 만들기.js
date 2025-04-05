function solution(num_list, n) {
    var answer = [];
    let tempArr = [];
    let cnt = 0;
    for(let i = 0; i < num_list.length; i++){
        tempArr.push(num_list[i]);
        cnt +=1;
        if(cnt%n===0){
            answer.push(tempArr);
            tempArr = [];
        }
    }
    
        
    return answer;
}