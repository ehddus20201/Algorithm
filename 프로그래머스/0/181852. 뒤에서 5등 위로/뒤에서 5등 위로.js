function solution(num_list) {
    let result =[];
    num_list.sort((a,b)=>a-b);
    console.log(num_list);
    
    for(let i=0; i<5;i++){
    num_list.shift();
    }
    return num_list;
}