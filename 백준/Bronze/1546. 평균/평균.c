#include <stdio.h>

int main() {
    float score[1001] = { 0, };
    float N;
    float max = -1;
    float meanscore[1001]={0,};
    float count = 0;

    scanf("%f", &N);
    for (int i = 1; N >= i; i++)
    {
        scanf("%f", &score[i]);
    }
    for (int i = 1; N >= i; i++)
    {
        if (max < score[i])
            max = score[i];
    }
    for (int i = 1; N >= i; i++)
    {
         count+= score[i]/max*100/N;
    }
    printf("%2f", count);
}