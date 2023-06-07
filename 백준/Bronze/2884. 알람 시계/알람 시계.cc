#include <stdio.h>

int main(){
    int a,b;
    scanf("%d %d",&a,&b);
    if(b<45 && a==0)
    {
        a=23;
        b=b+15;
        printf("%d %d",a,b);
    }
    else if(b<45 && a!=0)
    {
        b=b+15;
        a=a-1;
        printf("%d %d",a,b);
    }

    else
    {
        b=b-45;
        printf("%d %d",a,b);
    }
    
    return 0;
            
        
        
    
    
}