function solution(my_string) {
    let newStr = [];
    for(let i =0; i < my_string.length;i++){
        if(my_string[i]===my_string[i].toUpperCase())
            newStr.push(my_string[i].toLowerCase());
        else
            newStr.push(my_string[i]);
    }
    let sortedStr=newStr.sort();
    let strStr = sortedStr.join('');
    
    return strStr;
}