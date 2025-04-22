function solution(n_str) {
    let zeroIdx = -1;
    for(let i =0; i<n_str.length;i++){
        if(n_str[i]==="0"){
            zeroIdx = i;
            
        }else{
            break;
        }
    }
    if(zeroIdx === -1)
        return n_str;
    else{
        return n_str.slice(zeroIdx+1);
    }
}