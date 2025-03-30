function solution(numbers) {
    let cnt = 0;
    let numSum = 0;
    while(cnt < numbers.length){
        numSum = numSum + numbers[cnt]; 
        cnt = cnt + 1;
    }
    
    if((numSum/numbers.length)%0.5===0){
        return numSum/numbers.length;
    }
    return Math.floor(numSum/numbers.length);
}

//1. 배열의 원소 갯수 만큼 반복하는 반복문에서 배열의 원소들을 하나씩 더해준다.
//2. 모두 더한 값을 배열의 원소 갯수만큼 나누기 한다.
//3. 0.5로 나누었을때 나머지가 0이면 그대로 표시.
//4. 나머지가 0이 아니면 Math.floor로 내림하여 표시.