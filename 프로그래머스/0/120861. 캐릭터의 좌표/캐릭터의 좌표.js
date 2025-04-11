function solution(keyinput, board) {
    let result = [0,0];
    let xlimit = Math.trunc(board[0]/2);
    let ylimit = Math.trunc(board[1]/2);
    for(let i =0; i<keyinput.length; i++){
    switch(keyinput[i]){
        case "left":
            if(result[0]-1>=-xlimit) 
                result[0]-=1;
            break;
        case "right":
            if(result[0]+1<=xlimit) 
                result[0]+=1;
            break;
        case "up":
            if(result[1]+1<=ylimit) 
                result[1]+=1;
            break;
        case "down":
            if(result[1]-1>=-ylimit) 
                result[1]-=1;
            break;
  
    }
    }

    return result;

        
}