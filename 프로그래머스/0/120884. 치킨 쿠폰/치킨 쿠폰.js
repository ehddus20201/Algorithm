function solution(chicken) {
    let serviceChicken = 0;
    let remain =0;
    while(chicken>=1){
        serviceChicken += Math.floor(chicken/10);
        remain +=(chicken%10);
        if(remain>=10){
            serviceChicken+=Math.floor(remain/10);
            remain = (remain%10)+Math.floor(remain/10);
        }
        
        chicken=Math.floor(chicken/10);
    }
    return serviceChicken;
}