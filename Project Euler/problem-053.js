/* 
Problem 53: Combinatoric selections

There are exactly ten ways of selecting three from five, 12345:
123, 124, 125, 134, 135, 145, 234, 235, 245, and 345
In combinatorics, we use the notation, (5 / 3)=10
 
In general, (n / r)=n!r!(n−r)!, where r≤n, n!=n×(n−1)×...×3×2×1, and 0!=1.
It is not until n=23, that a value exceeds one-million: (23 / 10)=1144066.
How many, not necessarily distinct, values of (n / r) for 1≤n≤100, are greater than one-million?
*/

function combinatoricSelections(limit) {
    let factorials = Array(101).fill(1);
    let biggerThanLimit = 0;

    for (let i = 1; i < 101; i++) {
        factorials[i] *= factorials[i - 1] * i;
    }

    for (let n = 1; n < 101; n++) {
        for (let r = n; r > 0; r--) {
            if (factorials[n] / (factorials[r] * factorials[n - r]) > limit) {
                biggerThanLimit++;
            }
        }
    }

    return biggerThanLimit;
}

module.exports = { combinatoricSelections };