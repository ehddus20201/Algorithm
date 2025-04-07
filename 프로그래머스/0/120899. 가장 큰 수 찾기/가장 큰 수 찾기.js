function solution(array) {
    let maxNum = -1;
    for(let i =0; i<array.length;i++){
        if(maxNum < array[i]){
            maxNum = array[i];
        }
    }
    let idx = array.indexOf(maxNum);
    return [maxNum , idx];
}