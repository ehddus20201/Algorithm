function solution(letter) {
    
const morse = { 
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f',
    '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
    '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
    '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
    '-.--': 'y', '--..': 'z'
};
    let alphabet = '';
    let word = '';

         for(let i = 0 ; i < letter.length;i++){
             if(letter[i]===' '){
                 
                 word += morse[alphabet];
                 alphabet ='';
             }
             else{
                 alphabet +=letter[i];
             }
            }
    word +=morse[alphabet];
    return word;
    }
