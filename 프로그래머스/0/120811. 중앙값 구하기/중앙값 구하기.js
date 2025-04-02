function solution(array) {
    let newArray = [];
    
    for(let arraycnt = 0; arraycnt<array.length; arraycnt++){
        let minValue = 1000;
    
    for(let cnt = 0; cnt<array.length; cnt++){
        if(minValue>array[cnt]){
            minValue=array[cnt];
        }
        
    }
    for(let cnt2 = 0; cnt2<array.length; cnt2++){
        if(minValue===array[cnt2]){
            array[cnt2]=1000;
            break;
        }
        
    }
    newArray.push(minValue);
        
    }
    return newArray[Math.floor(newArray.length/2)];
}