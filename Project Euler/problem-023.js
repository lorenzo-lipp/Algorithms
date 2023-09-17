/* 
Problem 23: Non-abundant sums

A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.
A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.
As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. 
By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. 
However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.
Find the sum of all positive integers <= n which cannot be written as the sum of two abundant numbers.
*/

function sumOfNonAbundantNumbers(n) {
    const table = Array(n + 1).fill(1);
    const abundantNumbers = [];
    let totalSum = 0;
    table[0] = 0;

    for (let i = 2; i <= n; i++) {
        for (let j = 2; j * i <= n; j++) {
            table[j * i] += i;
        }
    }

    for (let i = 0; i <= n; i++) {
        if (table[i] > i) abundantNumbers.push(i);
    }

    for (let i = 0; i < abundantNumbers.length; i++) {
        for (let j = i; j < abundantNumbers.length; j++) {
            if (abundantNumbers[i] + abundantNumbers[j] <= n) {
                table[abundantNumbers[i] + abundantNumbers[j]] = 0;
            }
            
        }
    }

    for (let i = 0; i <= n; i++) {
        if (table[i] !== 0) totalSum += i;
    }

    return totalSum;
}

module.exports = { sumOfNonAbundantNumbers };