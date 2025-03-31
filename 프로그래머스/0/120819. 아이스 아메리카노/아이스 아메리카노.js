function solution(money) {
    var answer = [];
    answer.push(Math.floor(money/5500));
    answer.push(money%5500);
    return answer;

}
// return(Math.floor(money/5500),money%5500) 도 가능하다