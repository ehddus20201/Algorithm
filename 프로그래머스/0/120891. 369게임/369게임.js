function solution(order) {
    let answer =0;
    const strOrder = String(order);
    for(let i = 0;i<strOrder.length;i++){
        const item = strOrder[i];
        if(item ==='3'|| item ==='6'|| item === '9'){
            answer += 1;

        }
        
    }
    return answer;
}