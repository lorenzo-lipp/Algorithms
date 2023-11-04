/* 
Problem 58: Spiral primes

Starting with 1 and spiralling anticlockwise in the following way, a square spiral with side length 7 is formed.
[37] 36   35   34   33   32  [31]
 38 [17]  16   15   14  [13]  30 
 39  18   [5]   4   [3]  12   29 
 40  19    6    1    2   11   28 
 41  20   [7]   8    9   10   27 
 42  21   22   23   24   25   26 
[43] 44   45   46   47   48   49 
It is interesting to note that the odd squares lie along the bottom right diagonal, but what is more interesting is that 8 out of the 13 numbers lying along both diagonals are prime; that is, a ratio of 8/13 ≈ 62%.
If one complete new layer is wrapped around the spiral above, a square spiral with side length 9 will be formed. 
If this process is continued, what is the side length of the square spiral for which the percent of primes along both diagonals first falls below percent?
*/

function spiralPrimes(percent) {
    let primes = 0;
    let nonPrimes = 1;
    let lastPicked = 1;

    for (let i = 2; true; i += 2) {
        for (let val = 1; val <= 4; val++) {
            if (isPrime(lastPicked + i * val)) primes++;
            else nonPrimes++;
        }

        lastPicked = lastPicked + 4 * i;

        if (100 * primes / (primes + nonPrimes) < percent) return i + 1;
    }
}

function isPrime(num) {
    if (num % 2 === 0) return false;

    let maxNum = Math.sqrt(num);

    for (let divisor = 3; divisor <= maxNum; divisor += 2) {
        if (num % divisor === 0) return false;
    }

    return true;
}

module.exports = { spiralPrimes };