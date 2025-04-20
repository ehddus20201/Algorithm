function solution(num_str) {
    let result = 0;
    num_str = num_str.split("");
    num_str.forEach((item)=>{
        result+=Number(item);
    })
    return result;           
}