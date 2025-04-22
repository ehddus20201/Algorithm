function solution(my_string, m, c) {
    let result =[];
    my_string=my_string.split("");
    for(let i =0; i<my_string.length;i++){
        if(i%m===c-1){
            result.push(my_string[i]);
        }
    }
    return result.join("");
}