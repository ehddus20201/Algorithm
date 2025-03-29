function solution(n) {
    var answer = [];
    let cnt=1;
    while(n>=cnt){
        
        if(n>=cnt)
        {
            answer.push(cnt);
        }
        cnt=cnt+2;
        
    }
    return answer;
}
//1. 1부터 시작해서 크기 비교하고 더 크면 배열에 넣고, 2씩 증가 시키면서 크기 비교하고 더 크면 넣고 //반복
//2.같으면 n 넣고 마무리 작으면 바로 마무리 
