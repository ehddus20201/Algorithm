#include <stdio.h>

int main(){
    int a,b;
    scanf("%d %d",&a,&b);
    a=a/100+a%10*100+a/10%10*10;
    b=b/100+b%10*100+b/10%10*10;
    if(a>b)
        printf("%d",a);
    else if(a<b)
        printf("%d",b);
    
    return 0;
        
    
    
    
}