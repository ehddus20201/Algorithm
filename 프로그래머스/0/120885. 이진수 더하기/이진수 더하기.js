function solution(bin1, bin2) {
    bin1 = bin1.split("");
    bin2 = bin2.split("");
    let result = [];
    let bool = false;
    while(bin1.length>0||bin2.length>0){
        let b1 = (bin1.pop()||"0");
        let b2 = (bin2.pop()||"0");
        if(bool){
            if(b1==="1"&&b2==="1"){
                result.unshift("1");
                
            }
            else if(b1==="0"&&b2==="0"){
                result.unshift("1")
                bool = false;
            }
            else{
                result.unshift("0");
                
            }
            
        }
        else{
            if(b1==="1"&&b2==="1"){
                result.unshift("0");
                bool =true;
            }
            else if(b1==="0"&&b2==="0"){
                result.unshift("0")
                
            }
            else{
                result.unshift("1");
                
            }
            
        }
    }
    if(bool)
        result.unshift("1");
    return result.join("");
}