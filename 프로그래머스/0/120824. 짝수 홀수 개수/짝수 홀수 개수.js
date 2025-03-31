function solution(num_list) {
    let cnt = num_list.length-1;
    let odd = 0;
    let even = 0;
    while(cnt >= 0){
        if(num_list[cnt]%2===0){
            even = even + 1;
        }
        else{
            odd = odd + 1;
        }
        
        cnt = cnt - 1;
    }
    return [even,odd];
}

//1. 리스트의 정수 갯수만큼 반복하는 반복문에서 정수를 하나씩 뽑아온 뒤 2로 나누었을 때 나머지가 0이면 짝수 쪽을 1 더하고 나머지가 1이면 홀수 쪽을 1 더한다
//2. 반복문이 끝났다면 홀수 쪽과 짝수 쪽을 출력한다.