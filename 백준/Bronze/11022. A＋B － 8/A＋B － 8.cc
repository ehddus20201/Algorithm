#include <stdio.h>

int main() {
    int n, a, b;
    scanf("%d", &n);
    int c = 1;
    for (n; n >= 1; n--)
    {
        scanf("%d %d", &a, &b);
        printf("Case #%d: %d + %d = %d\n", c,a,b, a + b);
        c += 1;
    }

    return 0;
}