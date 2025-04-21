function solution(myString, pat) {
    myString=myString.split("");
    for(let i =0; i<myString.length;i++){
        if(myString[i]==="A"){
            myString[i]="B";
        }
        else if(myString[i]==="B"){
            myString[i]="A";
        }
    }
    myString=myString.join("");
    if(myString.includes(pat)){
        return 1;
    }
    return 0;
    
}