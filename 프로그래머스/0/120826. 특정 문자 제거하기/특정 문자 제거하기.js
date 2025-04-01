function solution(my_string, letter) {
    let boom_string="";
    let cnt = 0;
    while(my_string.length>cnt){
        if(my_string[cnt]===letter){
            my_string[cnt]="";
        }
        else{
            boom_string += (my_string[cnt]);
            
        }
        cnt = cnt + 1;
        
    }
    return boom_string;
    
}


//1. my_string 의 길이만큼 반복하는 반복문을 만들고 letter 값과 계속 비교하면서 같다면, 공백으로 대체한다
