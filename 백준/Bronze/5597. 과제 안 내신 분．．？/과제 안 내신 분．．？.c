#include <stdio.h>

int main(){
    int student[30];
    int a;
    
    for(int i=0;30>i;i++)
    {
        student[i]=i+1;
    }
    for(int i=0;28>i;i++)
    {
        scanf("%d",&a);
        student[a-1]=0;
    }
    for(int i=0;30>i;i++)
    {
        if(student[i]>0)
        {
            printf("%d ",i+1);
        }
    }
    
    
    
    return 0;
}