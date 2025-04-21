function solution(a, b) {
    if(Number(String(a).concat(String(b)))>=Number(String(b).concat(String(a)))){
        return Number(String(a).concat(String(b)));
    }else{
        return Number(String(b).concat(String(a)));
    }
    
}