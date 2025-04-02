function solution(letter) {
    let word = '';
const morse = { 
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e', '..-.': 'f',
    '--.': 'g', '....': 'h', '..': 'i', '.---': 'j', '-.-': 'k', '.-..': 'l',
    '--': 'm', '-.': 'n', '---': 'o', '.--.': 'p', '--.-': 'q', '.-.': 'r',
    '...': 's', '-': 't', '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x',
    '-.--': 'y', '--..': 'z'
};
let alphabet = '';
let cnt = 0;
         while(cnt<1000){
             if(letter[cnt]===' '){
                 word = word + (morse[alphabet]);
                 alphabet ='';
                 cnt = cnt + 1;
             }
             if(letter[cnt]===undefined){
                 word = word + (morse[alphabet]);
                     return word;
             }
             alphabet = alphabet + letter[cnt];
             cnt = cnt + 1;   
            }
}