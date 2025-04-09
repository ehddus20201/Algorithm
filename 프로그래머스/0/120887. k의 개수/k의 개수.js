function solution(i, j, k) {
    let result = 0;
    
    for(let v =i; v<=j;v++){
        let stri =String(v);
        for(let g = 0; g<stri.length;g++){
            if(stri[g]===String(k))
                result+= 1;
        }
    }
    return result;
}

//1. i 부터 j 까지 반복되는 반복문에서 커지는 값을 문자열로 바꾼 뒤 인덱스만큼 k 가 있는지 확인하고 있으면 result 1 증가가