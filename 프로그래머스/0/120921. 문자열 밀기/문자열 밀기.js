function solution(A, B) {
    if(A===B)
        return 0;
    A=A.split("");
    for(let i =1; i<A.length;i++){
        
        A.unshift(A.pop());
        if(A.join("")===B){
            return i;
        }

    }
    return -1;
}