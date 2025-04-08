function solution(numbers) {
    numbers.sort((a,b) => a - b);
    console.log(numbers);
    if(numbers[0]*numbers[1]>numbers[numbers.length-2]*numbers[numbers.length-1])
        return numbers[0]*numbers[1];
    else
        return numbers[numbers.length-2]*numbers[numbers.length-1]
}