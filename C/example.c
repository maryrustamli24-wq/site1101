#include <stdio.h>
#include <math.h>
int main(void){
    int age=20;
    float height=175.2;
    char letter ='A'; 
    printf("Age: %d\nHeight: %.2f\n", age, height);
    printf("Letter: %c\n", letter);

    int w;
    int l;
    float d= sqrt(pow(w,2)+pow(l,2));
    printf("Diagonal: %.2f\n", d);
}
