function solution(my_string) {
    let temp_string = "";
    
    for(let i=0; i<my_string.length;i++){
        let same =false;
        for(let j=0;j<temp_string.length;j++){
            if(my_string[i]===temp_string[j]){
                same = true;
                break;
                } 
            }
        
        if(!same)
                temp_string+=my_string[i];  
        
    }
    return temp_string;
}