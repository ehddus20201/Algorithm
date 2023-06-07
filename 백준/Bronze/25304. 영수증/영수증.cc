#include <stdio.h>


int main() {
    int X, N, a, b;
    int Total=0;
    scanf("%d\n", &X);
    scanf("%d\n", &N);
    for (int i = 1; N >= i; i++)
    {
        scanf("%d %d", &a, &b);
        Total += a * b;

    }
    if (Total == X)
        printf("Yes");
    else
        printf("No");
    return 0;
}