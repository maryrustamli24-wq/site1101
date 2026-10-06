#include <stdio.h>
#include <stdlib.h>
#include <time.h>
int draw_card()
{
    return rand() % 13 + 1;
}
int card_points(int card)
{
    if (card >= 11)
        return 10;
    else
        return card;
}
void print_card(int draw_card)
{
    switch (draw_card)
    {
    case 1:
        printf("You draw: A\n");
        break;
    case 11:
        printf("You draw: J\n");
        break;
    case 12:
        printf("You draw: Q\n");
        break;
    case 13:
        printf("You draw: K\n");
        break;
    default:
        printf("You draw: %d\n", draw_card);
        break;
    }
}
int read_choice()
{
    int choice;
    printf("1. Hit\n2. Stand\n");
    printf("Choice (1 or 2): ");
    scanf("%d", &choice);
    return choice;
    while (choice != 1 && choice != 2 ){
        printf("Please type 1 or 2.\n");
        printf("Choice: ");
        scanf("%d", &choice);
    }
}
int main(void)
{
    srand(time(NULL));
    int total_points = 0;
    int first_card = draw_card();
    print_card(first_card);
    total_points += card_points(first_card);
    printf("Your total: %d\n", total_points);

    while (total_points <= 21)
    {
        int choice = read_choice();

        if (choice == 2)
        {
            break;
        }
        else if (choice == 1)
        {
            int first_card = draw_card();
            print_card(first_card);

            total_points += card_points(first_card);
            printf("Your total: %d\n", total_points);
        }

        if (total_points > 21)
        {
            printf("Bust! Your total is over 21.\nDealer wins.\n./");
            break;
        }
    }
    return 0;
}
