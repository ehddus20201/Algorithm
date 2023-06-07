#include <stdio.h>

int main(){
    int a;
    int b[1000000];
    int H=-1000001;
    int L=+1000001;
    scanf("%d",&a);
    for(int i=0;a>i;i++)
    {
        scanf("%d ",&b[i]);
        
        if(b[i]>H)
        {
            H=b[i];
            
        }
        
        if(b[i]<L)
        {
            
            L=b[i];
        }
    }
    

    printf("%d %d",L,H);

    return 0;
}