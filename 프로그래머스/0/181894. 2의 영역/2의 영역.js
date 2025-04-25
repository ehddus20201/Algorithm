function solution(arr) {
    if(arr.indexOf(2)===-1){
        return [-1];
    }
    if(arr.indexOf(2)===arr.lastIndexOf(2)){
        return [2];
    }
    let start = arr.indexOf(2);
    let end = arr.lastIndexOf(2);
    return arr.slice(start,end+1);
    
}