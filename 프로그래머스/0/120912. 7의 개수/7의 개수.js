function solution(array) {
    let joinArray=array.join('');
    let cnt = 0;
    for(let i =0; i<joinArray.length;i++){
        if(joinArray[i]==='7')
            cnt += 1;
    }
    return cnt;
}