function solution(a, b) {
    if(b<a){
        for(let i =2; i<=b;){
            if(a%i===0 && b%i===0){
                a=a/i;
                b=b/i;
            }
            else{
                i++;
            }
        }
    }
    else if(a<b){
        for(let j =2; j<=a;){
            if(a%j===0 && b%j===0){
                a=a/j;
                b=b/j;
            }
            else{
                j++;
            }
        }
    }
    else if(a===b||b===1){
        return 1;
    }
    for(let k =2; k<=b;){
            if(b%k===0){
                b=b/k;
                if(k!==2&&k!==5){
                    return 2;
                }
            }
            else{
                k++;
            }
        }
    return 1;
}