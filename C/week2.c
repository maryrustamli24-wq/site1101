#include <stdio.h>

int main(void){
    char option;
    printf("A/B/C: ");
    scanf(" %c",&option);

    switch (option)
    {
     case 'A':
        printf("Add item");
        break;
     case 'B':
        printf("View cart");
        break;
    default:
    printf("Unknown option");

    }
}