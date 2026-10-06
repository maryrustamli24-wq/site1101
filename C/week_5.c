#include <stdio.h>
// int main(void) {
// int a[5];
// a[0] = 10;
// a[1] = 20;
// a[4] = 50;
// printf("first: %d\n", a[0]);
// printf("second: %d\n", a[1]);
// printf("last: %d\n", a[4]);
// printf("third: %d\n", a[2]);
// printf("fourth: %d\n", a[3]);

int main(void) {
int a[5];

for (int i = 0; i < 5; i++) {
    printf("Enter number %d: ", i + 1);
    scanf("%d", &a[i]);
}
for (int i = 0; i < 5; i++) {
printf("a[%d] = %d\n", i, a[i]);
}
return 0;
}
// }