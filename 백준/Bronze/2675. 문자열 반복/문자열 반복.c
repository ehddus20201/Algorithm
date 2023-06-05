#include <stdio.h>

int main(){
    int test;
    scanf("%d",&test);
    int repeat;
    int len;
    char str[20];
    for(int i=1;test>=i;i++)
    {
        scanf("%d %s",&repeat,str);
        len=strlen(str);
        for(int j=0;len>j;j++)
        {
            
            for(int k=0;repeat>k;k++)
                printf("%c",str[j]);
            
        }
        printf("\n");
        
    }
    return 0;
}