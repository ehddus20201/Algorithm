function solution(n) {
    if(Math.sqrt(n)%1===0)
        return (Math.sqrt(n)+1)**2;
    return -1;
}