#include <stdio.h>

int main(){
    int a;
    scanf("%d",&a);
    for(int i=1;a>=i;i++)
    {
        for(int j=a-1;i<=j;j--)
        { 
            printf(" ");
        }
        for(int j=1;i>=j;j++)
        {
            printf("*");
        }
        printf("\n");
        
    }
    
    
    
    
    return 0;
}