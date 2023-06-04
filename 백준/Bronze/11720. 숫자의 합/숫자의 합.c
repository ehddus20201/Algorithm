#include <stdio.h>

int main(){
    int a,temp=0;
    scanf("%d",&a);
    char b[a];
    scanf("%s",b);
    for(int i=0;i<a;i++)
        temp+=b[i]-'0';
    printf("%d",temp);
    return 0;
}