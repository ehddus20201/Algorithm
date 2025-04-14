function solution(id_pw, db) {
    // id_pw 는 id, pw 가 들어있는 길이가 2인 1차원 배열
    // db는 아이디와 비밀번호가 들어있는 길이가 2인 배열들이 있는 2차원 배열
    let id = id_pw[0];
    let pw = id_pw[1];
    for(let i =0; i<db.length;i++){
        if(id===db[i][0]){
            if(pw===db[i][1]){
                return "login";
            }
            else{
                return "wrong pw"
            }
        }
        
    }
    return "fail";
}