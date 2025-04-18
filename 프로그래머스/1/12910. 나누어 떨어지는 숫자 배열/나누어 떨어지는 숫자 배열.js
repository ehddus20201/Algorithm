function solution(arr, divisor) {
    arr.sort((a,b)=> a-b);
    let result =[];
    for(let i =0; i<arr.length;i++){
        if(arr[i]%divisor===0)
            result.push(arr[i]);
    }
    if(result.length===0)
        return [-1];
    return result;
}