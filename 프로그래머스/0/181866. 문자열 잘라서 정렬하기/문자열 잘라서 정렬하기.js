function solution(myString) {
    let result = [];
    myString = myString.split("x").sort();
    for(let i=0; i<myString.length;i++){
        if(myString[i]===""){
            continue;
        }
        result.push(myString[i]);
    }
    return result;
}