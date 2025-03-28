function solution(numbers) {
    var answer = [];
    let a=0;
    while(a < numbers.length){
            
    answer.push(numbers[a]*2);
    a=a+1;
        
    }
    return answer;
}



//1. 정수 배열에서 원소 꺼내기.
//2. 2배 곱하고 새로운 배열에 넣기.