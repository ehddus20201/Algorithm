function solution(n) {
    let evenNumbers=0;
    while(n!=0){
        

        if(n%2===0){
            evenNumbers = evenNumbers + n;
            n = n - 2;
        }
        else{
            n = n - 1;
        }
    }
    return evenNumbers;
}