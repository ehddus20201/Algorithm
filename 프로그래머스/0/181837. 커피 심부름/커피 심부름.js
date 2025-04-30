function solution(order) {
    let total = 0;
    for(let i = 0; i<order.length; i++){
        if(order[i]==="anything"||order[i].includes("americano")){
            total += 4500;
        }else{
            total += 5000;
        }
    }
    return total;
}