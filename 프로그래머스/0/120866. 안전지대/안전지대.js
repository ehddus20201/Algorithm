function solution(board) {
    let safeArea = 0;
    console.log(board.length);
    let dx = [-1,-1,-1,0,0,1,1,1];
    let dy = [-1,0,1,-1,1,-1,0,1];
    for(let i=0; i<board.length;i++){
        for(let j=0; j<board.length;j++){
            if(board[i][j]===1){
            for(let k=0; k<8; k++){
                let xk = i+dx[k];
                let yk = j+dy[k];
                if(xk>=0&&yk>=0&&xk<board.length&&yk<board.length&&board[xk][yk]===0)
                    board[xk][yk]=2;
            }
            }
            
        }
    }
    for(let i=0; i<board.length;i++){
        for(let j=0; j<board.length;j++){
            if(board[i][j]===0)
                safeArea+=1;
                
        }
    }
    return safeArea;
}

// 폭탄이 터진 범위의 배열 값이 0인 배열을 2로 변경.
// 폭탄의 위치에 있는 배열 값을 2로 변경.
// 다음 폭탄도 똑같이 하기.
// 다 터트리면 배열 값이 0인 지역의 갯수를 리턴.