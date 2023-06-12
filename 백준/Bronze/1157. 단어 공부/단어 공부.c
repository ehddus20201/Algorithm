#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main() {
    
    char str[1000000];
    int len = 0;
    scanf("%s", str);
    len = strlen(str);
    int count[26] = { 0, };
    int max = 0;
    int x = 0;
    int c = 0;
    for (int i = 'a'; i <= 'z'; i++)
    {
        for (int j = 0; j < len; j++)
        {
            if (i == str[j])
                count[i - 'a'] += 1;
        }
    }

    for (int i = 'A'; i <= 'Z'; i++)
    {
        for (int j = 0; j < len; j++)
        {
            if (i == str[j])
                count[i - 'A'] += 1;
        }
    }
    
    for (int i = 0; 26 > i; i++)
    {
        if (count[i] > max)
        {
            max = count[i];
            c = i;

        }
    }
    for (int i = 0; 26 > i; i++)
    {
        if (max== count[i])
        {
            x += 1;

        }
    }
    if (x>1)
    {
        printf("?");
    }
    else
    {
        printf("%c", c+'A');
    }
    return 0;

}