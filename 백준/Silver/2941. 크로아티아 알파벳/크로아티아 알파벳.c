#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>


int main() {
    char str[100] = { 0, };
    
    scanf("%s", str);
    int len=strlen(str);


    int count = len;
    for (int i = 0; len > i; i++)
    {
        if (str[i] == 'c' && str[i + 1] == '=')
            count--;
        if (str[i] == 'c' && str[i + 1] == '-')
            count--;
        if (str[i] == 'd' && str[i + 1] == 'z' && str[i + 2] == '=')
            count--;
        if (str[i] == 'd' && str[i + 1] == '-')
            count--;
        if (str[i] == 'l' && str[i + 1] == 'j')
            count--;
        if (str[i] == 'n' && str[i + 1] == 'j')
            count--;
        if (str[i] == 's' && str[i + 1] == '=')
            count--;
        if (str[i] == 'z' && str[i + 1] == '=')
            count--;

       
    }
    printf("%d", count);
    return 0;
}