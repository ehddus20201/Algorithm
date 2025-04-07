function solution(numbers) {
    let answer = '';
    let tempNum = '';
    for(let i = 0; i < numbers.length;i++){
        tempNum+=numbers[i];
        switch(tempNum){
            case 'zero':
                answer +='0'
                tempNum = '';
                break;
            case 'one':
                answer +='1';
                tempNum = '';
                break;
            case 'two':
                answer +='2';
                tempNum = '';
                break;
            case 'three':
                answer +='3';
                tempNum = '';
                break;
            case 'four':
                answer +='4';
                tempNum = '';
                break;
            case 'five':
                answer +='5';
                tempNum = '';
                break;
            case 'six':
                answer +='6';
                tempNum = '';
                break;
            case 'seven':
                answer +='7';
                tempNum = '';
                break;
            case 'eight':
                answer +='8';
                tempNum = '';
                break;
            case 'nine':
                answer +='9';
                tempNum = '';
                break;
                
        }
    }
    return Number(answer);
}