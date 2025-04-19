function solution(d, budget) {
    d.sort((a,b)=>a-b);
    let cnt =0;
    for(let i =0;budget-d[i]>=0;i++)
        {
            budget = budget-d[i];
            cnt++;
        }
    return cnt;
}