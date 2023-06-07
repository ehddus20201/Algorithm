#include <stdio.h>
#include <string.h>
int main() {
    char str[15];
    scanf("%s", str);
    int len;
    len = strlen(str);
    int mintime = 0;
    for (int i = 0; len > i; i++)
    {
        if (str[i] == 'A' || str[i] == 'B' || str[i] == 'C')
            mintime += 3;
        else if (str[i] == 'D' || str[i] == 'E' || str[i] == 'F')
            mintime += 4;
        else if (str[i] == 'G' || str[i] == 'H' || str[i] == 'I')
            mintime += 5;
        else if (str[i] == 'J' || str[i] == 'K' || str[i] == 'L')
            mintime += 6;
        else if (str[i] == 'M' || str[i] == 'N' || str[i] == 'O')
            mintime += 7;
        else if (str[i] == 'P' || str[i] == 'Q' || str[i] == 'R' || str[i] == 'S')
            mintime += 8;
        else if (str[i] == 'T' || str[i] == 'U' || str[i] == 'V')
            mintime += 9;
        else if (str[i] == 'W' || str[i] == 'X' || str[i] == 'Y' || str[i] == 'Z')
            mintime += 10;
        else
            mintime += 11;


    }
    printf("%d", mintime);
    return 0;
}