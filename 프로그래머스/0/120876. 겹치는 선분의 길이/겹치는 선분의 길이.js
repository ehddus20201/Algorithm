function duplicates(linesArray){
    const map = new Map();
    for(let i=0; i<linesArray.length;i++){
        map.set(linesArray[i],(map.get(linesArray[i])||0) + 1)
    }
    let count =0;
    for(let value of map.values()){
        if(value>=2)
            count++;
    }
    return count;
}



function solution(lines) {
    let linesArray= [];
    for(let i=0; i<lines.length; i++){
        while((lines[i][0])!==lines[i][1]){
            linesArray.push(lines[i][0]);
            lines[i][0]=lines[i][0] + 1;
        }
    }
    return duplicates(linesArray);
    
}