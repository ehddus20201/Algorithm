function solution(arr)
{
//    const answer = [];
//     for(let i = 0; i < arr.length; i++){    
//         if(arr[i]===arr[i-1]){
//             continue;
//         }
//         answer.push(arr[i]);       
//     }
//    return answer;
    
    
    
//     const answer = [];
//     let temp = -1;
//     arr.forEach((item)=>{
//         if(temp!==item){
//             answer.push(item);
//         }
//         temp = item;      
//     })
//    return answer;
    
    
    return  arr.reduce((acc, cur) => {
        if (acc[acc.length - 1] !== cur) { // acc[-1]= undefined;
            acc.push(cur);
        }
            return acc;
        }, []); //reduce의 초기값을 설정하지 않으면, arr[0] 이 초기값이 됩니다. 그렇기 때문에 숫자형이 초기값이 되고 push를 수행할 수 없기떄문에 오류 발생

    
    
}