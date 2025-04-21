function solution(myString, pat) {
    myString=myString.toLowerCase();
    pat=pat.toLowerCase()
    if(myString.includes(pat))
        return 1;
    return 0;
}