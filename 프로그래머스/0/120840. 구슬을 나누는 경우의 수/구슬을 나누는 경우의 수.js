function solution(balls, share) {
    function factorial(num){
        let calNum = 1;
        for(let cnt = num; num > 0; num--){
            calNum = calNum * num;
        }
        return calNum;
    }
    return Math.round(factorial(balls)/(factorial(balls - share)*factorial(share)));


    
    
                     
}
// 30 , 15를 넣은 값이 15117520.0000003 인 이유?

