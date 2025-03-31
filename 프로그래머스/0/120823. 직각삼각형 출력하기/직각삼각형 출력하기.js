const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let n = Number(input[0]);
     let line = 1;
while(line <= n){
    let star ="";
    let cnt = 0;
    while(line > cnt){
        star += "*";
        cnt = cnt + 1;
    }
    line = line + 1;
    console.log(star);

}

});




