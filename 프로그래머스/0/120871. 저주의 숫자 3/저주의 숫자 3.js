function solution(n) {
    let count =0;
    let num =1;
    
    while(count!==n){
        if(String(num).includes('3')||num%3===0){
           
           }
        else{
            count+=1;
        }
        num+=1;
        
        
    
}
    return num-1;
        
}
    
    


// num이 3의 배수이거나 3이 들어있다면 count++ 하고 count이 n 과 같아졌을 때의 count값이 정답.