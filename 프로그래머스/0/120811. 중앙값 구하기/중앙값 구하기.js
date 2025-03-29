function solution(array) {
    
    let Newarray=[];
    let arraycount=0;

    while(arraycount<array.length)
        {
            
            let cnt=0;
            let minNumber=1000;
            
                
        while(cnt < array.length){

            if(minNumber > array[cnt]){
                minNumber = array[cnt];
                }
                cnt = cnt + 1;
            }
        Newarray.push(minNumber);
        
        let cnt2=0;
        while(cnt2<array.length){
            if(minNumber===array[cnt2]){
                array[cnt2]=1000;
                break;
            }
        cnt2=cnt2+1;
    }
            arraycount=arraycount+1;
}
   
    return Newarray[Math.floor(array.length/2)];
    
}
