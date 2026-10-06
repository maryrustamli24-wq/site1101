#include <stdio.h>

int main(void) {

    // char num='8';
    // double pi=3.14;

    // printf("The character is: %g\n", pi);
    // printf("The character is: %d\n", pi); // %d is used to print the ASCII value of the character

    int age;
    printf("Enter your age: ");
    scanf("%d", &age);
    printf("The age is 18?: %d\n", age==18);
    printf("The age is 18?: %d\n", age!=18);

    if (age>=18) {
        printf("adult ticket\n");
    } else {
        printf("student ticket\n");
    }       

    return 0; 
}