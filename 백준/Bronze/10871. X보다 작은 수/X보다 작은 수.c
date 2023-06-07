#include <stdio.h>

int main(){
    int a,b;
    int n[10000];
    scanf("%d %d",&a,&b);
    for(int i=0;a>i;i++)
    {
        scanf("%d ",&n[i]);
    }
    
    for(int j=0;a>j;j++)
    {
        if(n[j]<b)
            printf("%d ",n[j]);
    }
    return 0;
    
}