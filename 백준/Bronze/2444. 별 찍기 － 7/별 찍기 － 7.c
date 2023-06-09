#include <stdio.h>



int main() {
    int a;
    scanf("%d", &a);

    for (int i = 0; a > i; i++)
    {

        for (int j = 1; a - i > j; j++)
        {
            printf(" ");
        }

        for (int k = 0; i * 2 + 1 > k; k++)
        {
            printf("*");
        }
        printf("\n");
    }

    for (int i = 1; a >= i; i++)
    {
        for (int j = 1; i >= j; j++)
        {
            printf(" ");
        }
        for (int k = 1; a * 2 - 1-2*i >= k; k++)
        {
            printf("*");
        }
        printf("\n");
    }
    return 0;

}