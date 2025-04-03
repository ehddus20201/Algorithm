function solution(rsp) {
    let result ="";
    for(let cnt = 0; cnt<rsp.length; cnt++){
        
        if(rsp[cnt]==="2"){
            result = result + "0";
        }
        else if(rsp[cnt]==="0"){
            result = result + "5";
        }
        else if(rsp[cnt]==="5"){
            result = result + "2";
        }
    }
    return result;
}

//1. 