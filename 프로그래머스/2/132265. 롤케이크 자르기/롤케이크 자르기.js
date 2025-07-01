function solution(topping) {
  const n = topping.length;
  const leftCount = new Array(n).fill(0);
  const rightCount = new Array(n).fill(0);

  const leftSet = new Set();
  for (let i = 0; i < n; i++) {
    leftSet.add(topping[i]);
    leftCount[i] = leftSet.size;
  }

  const rightSet = new Set();
  for (let i = n - 1; i >= 0; i--) {
    rightSet.add(topping[i]);
    rightCount[i] = rightSet.size;
  }

  let answer = 0;
  for (let i = 0; i < n - 1; i++) {
    if (leftCount[i] === rightCount[i + 1]) answer++;
  }

  return answer;
}