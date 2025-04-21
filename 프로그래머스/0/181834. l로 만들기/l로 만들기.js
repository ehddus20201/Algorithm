function solution(myString) {
    myString=myString.split("")
    for(let i =0; i<myString.length;i++){
        if(myString[i]<'l'){
            myString[i]='l';
        }
    }
    return myString.join("");
}