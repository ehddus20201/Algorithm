function solution(num_list) {
    let oddsum = 0;
    let evensum = 0;
    for(let i =0; i<num_list.length;i++){
        if(i%2===0)
            oddsum+=num_list[i];
        else
            evensum+=num_list[i];
    }
    if(evensum>=oddsum)
        return evensum;
    else 
        return oddsum;
}