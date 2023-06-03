#include <stdio.h>

int main(){
    int a;
    int c[42]={0,};
    int count=0;
    
    for(int i=0;10>i;i++)
    {
        scanf("%d",&a);
        c[a%42]+=1;

    }
    for(int i=0;42>i;i++)
    {
        if(c[i]>0)
        {
            count+=1;
        }
    }
    printf("%d",count);
        

    
    return 0;
}