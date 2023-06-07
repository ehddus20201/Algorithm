#include <stdio.h>

int main(){
    
    int a,c;
    int b[100];
    int count=0;
    
    scanf("%d",&a);
    
    for(int i=0;a>i;i++)
    {
        scanf("%d",&b[i]);
    }
    
    
    
    scanf("%d",&c);
    for(int j=0;a>j;j++)
    {
        if(b[j]==c)
            count+=1;
    }
    
    printf("%d",count);
    return 0;
}