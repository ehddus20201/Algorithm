function solution(str_list, ex) {
    let result = [];
    for(let i =0; i<str_list.length;i++){
        if(str_list[i].includes(ex)){
            continue;
        }
        else{
            result.push(str_list[i]);
        }
    }
    return result.join("");
}