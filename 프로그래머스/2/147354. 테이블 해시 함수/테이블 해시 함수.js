function solution(data, col, row_begin, row_end) {
    const S_i = [];
    let count = 0;
    for(let i=0; i<data.length; i++){
        data.sort((a,b)=>{
        if(a[col-1]===b[col-1]){
            return b[0]-a[0];
        }
            return a[col-1]-b[col-1];
        });
        
    }
    for(let j = row_begin; j<=row_end; j++){
        for(let k=0; k<data[0].length; k++){
            count+=data[j-1][k] % j
            }
        S_i.push(count);
        count = 0;
        
    }
    let xor = 0;
    for (let q = 0; q < S_i.length; q++) {
         xor ^= S_i[q];
    }
    return xor;
    
}