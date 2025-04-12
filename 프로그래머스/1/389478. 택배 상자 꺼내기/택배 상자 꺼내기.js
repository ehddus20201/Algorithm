function solution(n, w, num) {
    let row = Math.ceil(num / w);
    let col;
    if (row % 2 === 1) {
        //홀수층은 정방향
        col = (num - 1) % w + 1;
    } else {
        // 짝수층은 역방향
        col = w - ((num - 1) % w);
    }

    let totalFloor = Math.ceil(n / w);
    let count = 0;

    
    for (let i = row; i <= totalFloor; i++) {
        let boxNum =0;

        if (i % 2 === 1) {

            boxNum = (i - 1) * w + col;
        } else {

            boxNum = i * w - col + 1;
        }

        // 상자 번호가 n 이하여야 유효
        if (boxNum <= n) {
            count++;
        }
    }

    return count;
}