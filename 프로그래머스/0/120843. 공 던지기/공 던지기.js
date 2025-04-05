function solution(numbers, k) {
    let result = 0;
    result = numbers[(k * 2 - 2) % numbers.length];
    return result;
    
}

// 일단 몇번째인지는 구할수 있음 같거나 작으면 그냥 그 값 출력ㅎ고 아니면 