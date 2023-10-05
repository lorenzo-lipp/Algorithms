/* 
Problem 31: Coin sums

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:
1p, 2p, 5p, 10p, 20p, 50p, £1 (100p) and £2 (200p).
It is possible to make £2 in the following way:
1×£1 + 1×50p + 2×20p + 1×5p + 1×2p + 3×1p
How many different ways can n pence be made using any number of coins?
*/

function coinSums(n) {
    return coinSumsRecursion(n, 0);
}

function coinSumsRecursion(n, coinIndex) {
    if (n === 0) return 1;
    if (coinIndex > 7) return 0;

    let coins = [1, 2, 5, 10, 20, 50, 100, 200];
    let total = 0;

    for (let amount = 0; amount <= n / coins[coinIndex]; amount++) {
        total += coinSumsRecursion(n - amount * coins[coinIndex], coinIndex + 1);
    }

    return total;
}

module.exports = { coinSums };