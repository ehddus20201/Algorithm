#include <stdio.h>

int main(){
    int len;
    char str[1000000];
    int count=0;
    scanf("%[^\n]",str);
    len=strlen(str);
    
    if(len==1)
    {
        if(str[0]==' ')
        {
            printf("0");
            return 0;
        }
            
    }
        
    for(int i=1;len-1>i;i++)
    {
        if(str[i]==' ')
            count+=1;
    }
    
    printf("%d",count+1);
    return 0;
    
}