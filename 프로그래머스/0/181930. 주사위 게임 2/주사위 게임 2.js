function solution(a, b, c) {
    if(a!==b && b!==c && c!==a){
        return a+b+c;
    }
    if(a===b&&b!==c||b===c&&a!==c||a===c&&b!==c){
        return (a+b+c)*(a**2+b**2+c**2);
    }
    if(a===b&&b===c){
        return (a+b+c)*(a**2+b**2+c**2)*(a**3+b**3+c**3);
    }
}