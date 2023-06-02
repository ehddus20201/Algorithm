#include <stdio.h>

int main(){
    int N,M;
    int basket[101]={0,};
    int a,b;
    int temp;
    
    scanf("%d %d",&N,&M);
    
    for(int i=1;N>=i;i++)
    {
        basket[i]=i;
    }
    for(int i=1;M>=i;i++)
    {
        scanf("%d %d",&a,&b);
        temp=basket[a];
        basket[a]=basket[b];
        basket[b]=temp;
        
    }
    for(int i=1;N>=i;i++)
    {
        printf("%d ",basket[i]);   
    }

    return 0;
}