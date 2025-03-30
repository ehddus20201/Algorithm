function solution(n) {
    let pizza = 6;
    let step =0;
    for(step = 0; step<100; step++){
    if(pizza%n!=0){
        pizza=pizza+6;
    }
    else{
    pizza=pizza/6;
    break;
    }
    
    }
    return pizza;
}

    




// 1   6 1236
// 2  12  12346 12 
// 3  18 9
// 4  24 8