#include <stdio.h>

int main(){
    char str[100];
    scanf("%s",str);
    int len=0;
    len=strlen(str);
    int check=1;
    for(int i=0;len/2>i;i++)
    {
        if(str[i]!=str[len-1-i])
        {
            check-=1;
        }
    }
    if(check==1)
        printf("1");
    else
        printf("0");
    
    return 0;
    
}