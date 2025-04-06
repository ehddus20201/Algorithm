function solution(my_string) {
    let result = [];
    for(let i=0; i<my_string.length; i++){
        const item = my_string[i];
        if(Number.isNaN(Number(item))){
            continue;
        }
        result.push(Number(item));
        
    }
    return result.sort((a,b)=>a - b);
}