function solution(array, n) {
    let lowerValue = 100;
    let closeValue;
    array.sort((a,b)=> a - b);
    for(let i = 0; i < array.length; i++){
        if(Math.abs(array[i]-n)<lowerValue){
            lowerValue = Math.abs(array[i]-n);
            closeValue=array[i];
        }
        else if(Math.abs(array[i]-n)===lowerValue){
            closeValue = array[i-1];
        }
        
    }
    return closeValue;
}