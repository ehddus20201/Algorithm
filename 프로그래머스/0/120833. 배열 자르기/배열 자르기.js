function solution(numbers, num1, num2) {
    let result = [];
    let cnt = num1;
    while(cnt<=num2){
        result.push(numbers[cnt])
        cnt = cnt + 1;
    }
    return result;

}
