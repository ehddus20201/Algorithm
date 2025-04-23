function solution(arr) {
    let mul =1;
    
    while(arr.length>mul){
        mul*=2;
        
    }
    let cnt=mul-arr.length;
    for(let i = 0; i < cnt; i++){
        arr.push(0);
    }
    return arr;
        
}