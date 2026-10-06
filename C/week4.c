#include <stdio.h>
int cube(int a) {
    return a * a * a;
}

int sing(int n){
    printf("Number: %d\n", n);
    if (n>0){
        printf("sign: -1");
        }
    else if (n<0){
        printf("sign: 1");
    }
    else{
        printf("sign: 0");
    }
    return 0;
}
int main(void) {
int number = 3;
printf("Number: %d\n",number);
printf("cube(%d) = %d\n", number, cube(number));
int num;
printf("Enter a number: ");
scanf("%d", &num);






return 0;
}