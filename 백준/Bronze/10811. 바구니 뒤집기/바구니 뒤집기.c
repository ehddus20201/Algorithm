#include <stdio.h>

int main() {

    int N, M, a, b;
    int basket[100] = { 0, };
    int temp;
    scanf("%d %d", &N, &M);
    for (int i = 1; N >= i; i++)
    {
        basket[i] = i;
    }
    for (int i = 0; M > i; i++)
    {
        scanf("%d %d", &a, &b);
        for (int j = 0; (b - a) / 2 >= j; j++)
        {
            temp = basket[b - j];
            basket[b - j] = basket[a + j];
            basket[a + j] = temp;

        }

    }
    for (int i = 1; N >= i; i++)
    {
        printf("%d ", basket[i]);
    }
    return 0;
}