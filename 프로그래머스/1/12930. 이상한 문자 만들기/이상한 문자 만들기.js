function solution(s) {
    s=s.split("");
    let j =0;
    for(let i = 0; i < s.length; i++){
        if(s[i]===" "){
            j=0;
            continue;
        }
        if(j%2===0){
            s[i]=s[i].toUpperCase();
        }
        else if(j%2===1){
            s[i]=s[i].toLowerCase();
        }
        j++;
    }
    return s.join("");
}