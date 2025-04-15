function solution(num, total) {
    let result =[];
    if(num%2===1){
        let firstValue=(total/num)-Math.floor(num/2);
        for(let i=0; i<num;i++){
            result.push(firstValue);
            firstValue++;
        }
    }
    else{
        let firstValue=Math.ceil(total/num)-Math.floor(num/2);
        for(let i=0; i<num;i++){
            result.push(firstValue);
            firstValue++;
        }
    }
    return result;
}