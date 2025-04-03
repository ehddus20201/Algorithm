function solution(emergency) {
    let newEmergency =[];
    
    for(let cnt = 0; cnt<emergency.length; cnt++){
    newEmergency.push({value: emergency[cnt],idx: cnt});
    }
    
    newEmergency.sort((a,b) => b.value - a.value );
    
    let result = new Array(emergency.length);
    
    for(let cnt = 0; cnt<emergency.length; cnt++){
        let ltem = newEmergency[cnt];
        result[ltem.idx] = cnt + 1;
    }
    
    return result;
}

//1. 새로운 배열을 만들고 그 배열에 원래 배열을 넣는다.
//2. 내림차순 정렬 한 뒤에 배열의 위치에 따라서 
// newEmergency [3,76,24]    emergency [76,24,3]      result[3,1,2]
//splice 사용하기 or 새 배열 만들어서 push 하기