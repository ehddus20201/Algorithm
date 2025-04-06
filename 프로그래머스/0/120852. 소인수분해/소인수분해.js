function solution(n) {
    let result =[];
    let still = true;
    for(let cnt = 2; cnt <= n;cnt++){
        if(n % cnt === 0)
            result.push(cnt);
        while(n % cnt === 0)
            n /= cnt;
    }
    return result.sort((a,b) => a - b);
    
}

    
