function solution(num_list) {
    let odd =[];
    let even = [];
    for(let i =0; i<num_list.length;i++){
        if(num_list[i]%2===1){
            odd.push(num_list[i]);
        }
        else{
            even.push(num_list[i]);
        }
    }
    return Number(odd.join(""))+Number(even.join(""));
}