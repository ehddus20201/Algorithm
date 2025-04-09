function solution(my_string) {
    let tempStr ='';
   
    let result=0;
    for(let i = 0; i < my_string.length; i++){
        if(isNaN(Number(my_string[i]))){
            continue;
        }
        tempStr+=my_string[i];
        console.log(tempStr);
        if(!isNaN(Number(my_string[i+1])))
           continue;
        result+=Number(tempStr);
        tempStr ='';
        
           
    }
    return result;
}