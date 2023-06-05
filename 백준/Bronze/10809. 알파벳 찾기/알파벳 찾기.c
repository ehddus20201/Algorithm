#include <stdio.h>

int main() {
    int a[26];
    char str[100];
    int b[26] = { 0, };
    int c= 0;
    scanf("%s", str);
    for (int i = 0; 26 > i; i++)
    {
        a[i] = -1;
    }
    c=strlen(str);
    for (int i =0;c>i; i++)
    {
        b[i] = str[i] - 'a';
        if (a[b[i]] == -1)
            a[b[i]] = i;
    }
    for (int i = 0; 26 > i; i++)
    {
        printf("%d ", a[i]);
    }
    return 0;
}