#include <stdio.h>
#include <math.h>

int main(void){
	double  r, area;
	const double PI=3.14159;
	printf("The radius is ");
	scanf("%lf",&r);
	printf("The area is %.2f - \n",PI*r*r);
	
	double w, l,ar,per;

	printf("write the w and l");
	scanf("%lf %lf",&w,&l);
    ar=w*l;
	per=2*(w+l);
	printf("the area is %.2f",ar);
	printf("the perimeter is %.2f",per);
	return 0;
	


	
}