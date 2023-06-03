#include <stdio.h>

int main(){
    
    int t;
    int a;
    char c,d;
    char str[1000];
    scanf("%d",&t);
    
    for(int i=1;t>=i;i++)
    {
        
        scanf("%s",str);
        a=strlen(str);
        c=str[0];
        d=str[a-1];
        printf("%c%c\n",c,d);
    }
    
    
    
}