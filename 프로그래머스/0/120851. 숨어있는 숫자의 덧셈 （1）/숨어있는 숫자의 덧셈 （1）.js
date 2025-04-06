function solution(my_string) {
    var answer = 0;
    for(let i =0; i<my_string.length;i++){
        const item =Number(my_string[i]);
        if(Number.isNaN(item))
            continue;
        answer +=item;

    }
    return answer;
}