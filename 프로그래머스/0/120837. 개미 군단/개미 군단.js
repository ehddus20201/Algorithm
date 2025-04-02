function solution(hp) {
    let Att5remain = hp % 5;
    let Att3remain = Att5remain % 3;
    return Math.floor(hp / 5) + Math.floor(Att5remain / 3) + Math.floor(Att3remain / 1);   
}