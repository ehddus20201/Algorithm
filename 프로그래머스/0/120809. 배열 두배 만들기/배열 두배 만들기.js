function solution(numbers) {

    for(let cnt = 0;cnt < numbers.length; cnt++){
        numbers.splice(cnt,1,numbers[cnt]*2);
    }
    return numbers;
        
    
}