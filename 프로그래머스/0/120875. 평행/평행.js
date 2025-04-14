function solution(dots) {
    let case1 = [0, 1, 2, 0, 1, 0];
    let case2 = [1, 2, 3, 2, 3, 3];
    let case3 = [2, 3, 0, 1, 0, 1];
    let case4 = [3, 0, 1, 3, 2, 2];
    for(let i=0; i<6; i++){
        let A=dots[case1[i]];
        let B=dots[case2[i]];
        let C=dots[case3[i]];
        let D=dots[case4[i]];
        if((A[1]-B[1])/(A[0]-B[0])===(C[1]-D[1])/(C[0]-D[0])){
            return 1;
        }
    }
    return 0;
}