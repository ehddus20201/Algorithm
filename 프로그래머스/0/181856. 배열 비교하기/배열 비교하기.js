function solution(arr1, arr2) {
    let arr1sum = 0;
    let arr2sum = 0;
    if(arr1.length>arr2.length)
        return 1;
    else if(arr1.length<arr2.length)
        return -1;
    else if(arr1.length===arr2.length){
        for(let i =0; i<arr1.length;i++){
            arr1sum+=arr1[i];
        }
        for(let j =0; j<arr2.length;j++){
            arr2sum+=arr2[j];
        }
        if(arr1sum>arr2sum)
            return 1;
        else if(arr1sum<arr2sum)
            return -1;
        else if(arr1sum===arr2sum)
            return 0;   
    }
}