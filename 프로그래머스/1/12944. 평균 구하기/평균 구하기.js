function solution(arr) {
    let mean = 0;
    for(let i=0; i<arr.length;i++){
        mean +=arr[i];
    }
    return mean/arr.length;
}