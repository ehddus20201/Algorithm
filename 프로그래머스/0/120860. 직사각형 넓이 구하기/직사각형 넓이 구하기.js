function solution(dots) {
    let length = 0;
    let width = 0;
    for(let i =0; i<3;i++){
        if(dots[0][1]===dots[i+1][1])
            length=Math.abs(dots[0][0]-dots[i+1][0]);
        if(dots[0][0]===dots[i+1][0])
            width=Math.abs(dots[0][1]-dots[i+1][1]);
        
        
        
            
    }
    return length*width;
}