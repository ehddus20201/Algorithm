#include <stdio.h>

int main(){
    int a[6]={1,1,2,2,2,8};
    int b[6]={0,};
    int c[6]={0,};
    scanf("%d %d %d %d %d %d",&b[0],&b[1],&b[2],&b[3],&b[4],&b[5]);
    for(int i=0;6>i;i++)
    {
       c[i]=a[i]-b[i];
    }
    printf("%d %d %d %d %d %d",c[0],c[1],c[2],c[3],c[4],c[5]);
    return 0;
    
}