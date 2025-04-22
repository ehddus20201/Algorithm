function solution(a, b) {
    let str=String(a).concat(String(b));
    if(Number(str)>=2*a*b){
        return Number(str);
    }
    else{
        return 2*a*b;
    }
}