function solution(arr) {
    let str = [];
    for(let i = 0; i < arr.length; i++){
        if(str.length === 0){
            str.push(arr[i]);
        }else if(str.length !== 0 && str[str.length - 1]===arr[i]){
            str.pop();
            continue;
        }else if(str.length !== 0 && str[str.length - 1]!==arr[i]){
            str.push(arr[i]);
        }
    }
    if(str.length===0){
        return [-1];
    }
        
    return str;
}