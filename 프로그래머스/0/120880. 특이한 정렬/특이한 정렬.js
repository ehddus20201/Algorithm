function solution(numlist, n) {
    return sortedlist = numlist.sort((a,b)=>{
        let absA = Math.abs(a-n);
        let absB = Math.abs(b-n);
        if(absA===absB){
            return b-a;
        }
        return absA - absB;
    })
                            
                                 
                                 
                                 
                                 
    
}