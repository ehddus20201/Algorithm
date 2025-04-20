function solution(sizes) {
    let max = 0;
    let min =0;
    let mins = [];
    for(let i = 0; i < sizes.length; i++){
        for(let j = 0; j < 2; j++){
            if(max<sizes[i][j]){
                max=sizes[i][j];
            }
        }
    }
    for(let i = 0; i < sizes.length; i++){
        for(let j = 0; j < 1; j++){
            if(sizes[i][j+1]>sizes[i][j]){
                mins.push(min=sizes[i][j]);
            } else{
                mins.push(min=sizes[i][j+1]);
            }
            
        }
    }
    return max*Math.max(...mins);
}
// 2차원 배열을 모두 돌면서 가장 큰 값을 찾는다.
// 