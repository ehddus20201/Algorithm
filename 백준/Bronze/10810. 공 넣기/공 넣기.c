#include <stdio.h>

int main(){
    int a,b,c,N,M;
    int d[101]={0,};
    scanf("%d %d",&N,&M);
    
    for(int i=1;M>=i;i++)
    {
        scanf("%d %d %d",&a,&b,&c);
        for(int j=a;b>=j;j++)
        {
            d[j]=c;
        }
    }
    for(int k=1;N>=k;k++)
    {
        printf("%d ",d[k]);
    }
    
    
    

    return 0;
}