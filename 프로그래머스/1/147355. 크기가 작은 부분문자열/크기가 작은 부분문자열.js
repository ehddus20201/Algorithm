function solution(t, p) {
    let cnt =0;
    for(let i=0; i<t.length-p.length+1;i++){
        if(t.slice(i,i+p.length)===p||t.slice(i,i+p.length)<p){
            cnt++;
        }
        
    }
    return cnt;
}