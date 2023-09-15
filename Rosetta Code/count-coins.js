/* 
Count the coins

There are four types of common coins in US currency:
quarters (25 cents)
dimes (10 cents)
nickels (5 cents), and
pennies (1 cent)
There are six ways to make change for 15 cents:
A dime and a nickel
A dime and 5 pennies
3 nickels
2 nickels and 5 pennies
A nickel and 10 pennies
15 pennies
Implement a function to determine how many ways there are to make change for a given input, cents, that represents an amount of US pennies using these common coins.
*/

function countCoins(n) {
    return countCoinsRecursion(n, 0);
}

function countCoinsRecursion(n, coinIndex) {
    if (n === 0) return 1;
    if (coinIndex > 3) return 0;

    let coins = [1, 5, 10, 25];
    let total = 0;

    for (let amount = 0; amount <= n / coins[coinIndex]; amount++) {
        total += countCoinsRecursion(n - amount * coins[coinIndex], coinIndex + 1);
    }

    return total;
}

module.exports = { countCoins };