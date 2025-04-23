function solution(str1, str2) {
    let result = [];
    str1 = str1.split("");
    
    str2 = str2.split("");
    for(let i = 0; i < str1.length; i++){
        result.push(str1[i]);
        result.push(str2[i]);
    }
    return result.join("");
}