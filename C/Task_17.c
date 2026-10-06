#include <stdio.h>
#include <math.h>
int main(void){
    
    //Task with the celsius to fahrenheit conversion. The formula is F = C * 9/5 + 32
    double c;
    printf("Enter the temperature in Celsius: ");
    scanf("%lf",&c);
    printf("Temperature in Fahrenheit: %.2f\n",(c*9/5+32));
    //Task with the bill and distrubition
    double bill;
    int people;
    printf("Ex2\n");
    printf("Enter the total bill : ");
    scanf("%lf",&bill);
    printf("Enter the number of people: ");
    scanf("%d",&people);
    printf("Each pays : %.2f", (bill/people));
   
    //Task with the distance between two points.
    double x1,x2,y1,y2;
    printf("\nEx3\n");
    printf("Enter the coordinates of the first point (x1,y1) : ");
    scanf("%lf %lf",&x1,&y1);
    printf("Enter the coordinates of the second point (x2,y2) : ");
    scanf("%lf %lf",&x2,&y2);
    printf("Distance between the two points : %.2f",sqrt(pow(x2-x1,2)+pow(y2-y1,2)));
    return 0;
}