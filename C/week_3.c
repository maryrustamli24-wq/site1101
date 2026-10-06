#include <stdio.h>
#include <stdbool.h>

int main() {
int count = 1;
while (count <= 3) {
    printf(" %d\n", count);
    count++;
} 

for (int i = 1; i <= 3; i++) {
    printf(" %d\n", i*7);
}   

printf("Done counting!\n");
return 0;
}