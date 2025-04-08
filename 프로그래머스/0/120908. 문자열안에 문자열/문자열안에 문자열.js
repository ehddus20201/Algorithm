function solution(str1, str2) {
    let bool = false;
    for(let i = 0; i<str1.length;i++){
        if(str1[i]===str2[0]){
            if(str1.slice(i,i+str2.length)===str2)
                bool = true;
        }
    }
    if(bool)
        return 1;
    else 
        return 2;
}