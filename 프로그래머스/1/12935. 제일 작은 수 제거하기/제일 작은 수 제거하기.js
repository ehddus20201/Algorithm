function solution(arr) {
    let min =arr[0];
    let idx;
    if(arr.length===1)
        return [-1];
    for(let i =0; i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
            idx=i;
        }
    }
    arr.splice(idx,1);
    return arr;
}