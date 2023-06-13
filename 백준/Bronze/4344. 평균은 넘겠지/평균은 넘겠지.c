#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

int main() {
    int C;
    int N;
    int score[1000];
    scanf("%d", &C);
    for (int i = 0; C > i; i++)
    {
        float mean = 0;
        int up = 0;
        scanf("%d", &N);
        for (int j = 0; N > j; j++)
        {
            scanf("%d", &score[j]);
            mean += score[j];
        }
        mean = mean / N;
        for (int k = 0; N > k; k++)
        {
            if (mean < score[k])
            {
                up++;
            }
        }
        printf("%.3f%%\n", ((double)up / N) * 100);


    }
    return 0;




}