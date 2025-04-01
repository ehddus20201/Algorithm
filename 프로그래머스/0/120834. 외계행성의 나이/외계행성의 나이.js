function solution(age) {
    let result = '';
    let cnt = 0;
    const stringAge = String(age);
    while(cnt<stringAge.length){
        if(stringAge[cnt]==='0'){
            result = result + 'a';
        }
        if(stringAge[cnt]==='1'){
            result = result + 'b';
        }
        if(stringAge[cnt]==='2'){
            result = result + 'c';
        }
        if(stringAge[cnt]==='3'){
            result = result + 'd';
        }
        if(stringAge[cnt]==='4'){
            result = result + 'e';
        }
        if(stringAge[cnt]==='5'){
            result = result + 'f';
        }
        if(stringAge[cnt]==='6'){
            result = result + 'g';
        }
        if(stringAge[cnt]==='7'){
            result = result + 'h';
        }
        if(stringAge[cnt]==='8'){
            result = result + 'i';
        }
        if(stringAge[cnt]==='9'){
            result = result + 'j';
        }
        cnt = cnt + 1;  
    }
    return result;
}