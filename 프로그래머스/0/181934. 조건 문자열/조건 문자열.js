function solution(ineq, eq, n, m) {
    if(eq==="!"&&ineq==="<"){
        if(n<m)
            return 1;
    }
    else if(eq==="!"&&ineq===">"){
        if(n>m)
            return 1;
    }
    else if(eq==="="&&ineq===">"){
        if(n>=m)
            return 1;
    }
    else if(eq==="="&&ineq==="<"){
        if(n<=m)
            return 1;
    }
    return 0;
}