function solution(my_string) {
    let word = my_string.split(" ");
    let realword=[];
    for(let i =0; i<word.length;i++){
        if(word[i].length>0)
            realword.push(word[i]);
    }
    return realword;
}