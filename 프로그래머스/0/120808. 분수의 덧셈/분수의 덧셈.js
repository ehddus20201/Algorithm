function solution(numer1, denom1, numer2, denom2) {
    let denom = denom1 * denom2;
    let numer = numer1 * denom2 + numer2 * denom1;
    let maxdiv = 1;
    if(denom ===numer)
        return [1,1];
    if(denom > numer){
        for(let i = 1; i <= numer; i++){
            if(denom%i===0 && numer%i===0){
                maxdiv = i;
            }
        }
    }
    else{
        for(let i = 1; i <= denom; i++){
            if(denom%i===0 && numer%i===0){
                maxdiv = i;
            }
        }
    }
    return [numer / maxdiv,denom / maxdiv];
    
        
    }
    
    


//1.분수의 합 공식을 이용하여 분모가 denom1*denom2 분자가 numer1*denom2+numer2*denom1 이므로 계산.
//2. 각각의 값을 push를 이용하여 분모값이 먼저 들어가야하니 분모값을 먼저 push 한다.
//3. answer 배열을 리턴.

//라고 생각했으나 기약 분수로 나타내야하니 분모 분자값을 변수에 먼저 저장한다.
//분모값과 분자값의 최대 공약수로 나눈다.
// push 이용하기.