#include <stdio.h>

int main(){
    int a,b,c,d,e;
    int answer;
    scanf("%d %d %d %d %d",&a,&b,&c,&d,&e);
    a=a*a;
    b=b*b;
    c=c*c;
    d=d*d;
    e=e*e;
    answer=(a+b+c+d+e)%10;
    printf("%d",answer);
    return 0;
    
}