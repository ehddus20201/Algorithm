function solution(array) {
    var answer = 0;
    let newArray = [];  
    let arraycount= 0;
    

    while(arraycount<array.length){
    let cnt = 0;
    let minNumber = 1000;
        while(cnt<array.length){
            if(minNumber>array[cnt]){
                minNumber=array[cnt]
                }
                cnt = cnt + 1;
}
    newArray.push(minNumber);
    let cnt2 = 0;
        while(cnt2<array.length){
            if(minNumber===array[cnt2]){
                array[cnt2]=1000;
                break;
                }
            cnt2=cnt2+1;
            }
            arraycount=arraycount+1;
}
    
    let cnt3 = 0; 
    let choi = -1;// 최빈값이 무엇인지
    let choiRepeatCnt = 0;// 최빈값이 될때 몇번 반복한건지
    let repeatCnt = 0;// 같은 숫자가 몇번 등장했는지
    let beforeNumber = -1;// 이전숫자
    let choidup = false;
    while(cnt3<newArray.length){
        if(beforeNumber!=newArray[cnt3]){
            repeatCnt = 1;
        }
        else{
            repeatCnt = repeatCnt + 1;
        }
        if(repeatCnt > choiRepeatCnt){
            choi = newArray[cnt3];
            choiRepeatCnt = repeatCnt;
            choidup = false;
            
        }
        if(choiRepeatCnt===repeatCnt){
            if(choi!=newArray[cnt3]){
            choidup = true;
            }
        }
        beforeNumber=newArray[cnt3];
            

        cnt3 = cnt3 + 1;
        
    }
    
        if (choidup)
            return -1;
    
        return choi;
    
}

//1.정렬.
//2.원소를 확인하면서 갯수를 센다
//3.최빈값 계속 기록하기