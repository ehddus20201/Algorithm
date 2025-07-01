function solution(topping) {
  const leftCnt = [];
  const rightCnt = [];

  const leftSet = new Set();
  for (let i = 0; i < topping.length; i++) {
    leftSet.add(topping[i]);
    leftCnt.push(leftSet.size);
  }

  const rightSet = new Set();
  for (let i = topping.length - 1; i >= 0; i--) {
    rightSet.add(topping[i]);
    rightCnt.push(rightSet.size);
  }
    rightCnt.reverse();

  let answer = 0;
  for (let i = 0; i < topping.length - 1; i++) {
    if (leftCnt[i] === rightCnt[i + 1]){
        answer+=1;
    }
        
  }

  return answer;
}