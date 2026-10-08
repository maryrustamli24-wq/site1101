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
        printf("A\n");
        break;
    case 11:
        printf("J\n");
        break;
    case 12:
        printf("Q\n");
        break;
    case 13:
        printf("K\n");
        break;
    default:
        printf("%d\n", draw_card);
        break;
    }
}
int read_choice()
{
    int choice;
    printf("1. Hit\n2. Stand\n");
    printf("Choice (1 or 2): ");
    scanf("%d", &choice);
    while (choice != 1 && choice != 2 ){
        printf("Please type 1 or 2.\n");
        printf("Choice: ");
        scanf("%d", &choice);
    }
    return choice;
}
int player_turn()
{
    printf("PLAYER TURN\n");
    int total_points = 0;
    int first_card = draw_card();
    printf("You draw: ");
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
            printf("You draw: ");
            print_card(first_card);

            total_points += card_points(first_card);
            printf("Your total: %d\n", total_points);
        }

        if (total_points > 21)
        {
            printf("Bust! Your total is over 21.\nDealer wins.\n");
            break;
        }
    }
    return total_points;
}
int dealer_turn()
{
    printf("DEALER TURN\n");
    int total_points = 0;
    int first_card = draw_card();
    printf("Dealer draws: ");
    print_card(first_card);
    total_points += card_points(first_card);
    printf("Dealer total: %d\n", total_points);
    while (total_points < 17)
    {
            int first_card = draw_card();
            printf("Dealer draws: ");
            print_card(first_card);

            total_points += card_points(first_card);
            printf("Dealer total: %d\n", total_points);

    }

    if (total_points > 21)
    {
        printf("Dealer busts!\n");
    }
    else 
    {
        printf("Dealer stands.\n");

    }
    
    return total_points;

}
int main(void)
{
    srand(time(NULL));
    int player_total = player_turn();
    if (player_total > 21)
    {
        return 0;
    }
    int dealer_total = dealer_turn();
        if (dealer_total > 21)
    {
        return 0;
    }
    printf("Player total: %d\n", player_total);
    printf("Dealer total: %d\n", dealer_total);
    if (dealer_total > player_total && dealer_total < 21)
    {
        printf("Dealer wins!\n");
    }
    else if (player_total > dealer_total && player_total <= 21)
    {
        printf("Player wins!\n");
    }
    else if (player_total == dealer_total && player_total <= 21)
    {
        printf("It's a tie!\n");
    }

    return 0;
}
