function solution(price, money, count) {
    money = money -((count*(price+price*count))/2);
    if (money>0)
        return 0;
    return Math.abs(money);
}