#include <stdio.h>
#define max(x, y) ((x) > (y) ? (x) : (y))
int main() {
    int f, s, t;
    scanf("%d %d %d", &f, &s, &t);
    if (f == s && s == t)
    {
        printf("%d", 10000 + f * 1000);
    }
    else if (f==s||s==t)
    {
        printf("%d", 1000 + s * 100);
    }
    else if (f == t) {
        printf("%d", 1000 + f * 100);
    }
    else {
        printf("%d", max(max(f,s),t) * 100);
    }

    return 0;

}