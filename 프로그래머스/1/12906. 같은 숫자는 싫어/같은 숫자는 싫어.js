function solution(arr)
{
    
    let answer = [];
    for(let i=0; i<arr.length;i++){
        if(arr[i]===arr[i+1]){
            continue;
        }
        else{
            answer.push(arr[i]);
        }
        
    }
    return answer;
}