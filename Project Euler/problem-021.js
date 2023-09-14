/* 
Problem 21: Amicable numbers

Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.
For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.
Evaluate the sum of all the amicable numbers under n.
*/

function sumAmicableNum(n) {
    const table = Array(n + 1).fill(1);
    let amicableSum = 0;

    for (let i = 2; i <= n; i++) {
        for (let j = 2; j * i <= n; j++) {
            table[j * i] += i;
        }
    }

    for (let i = 2; i <= n; i++) {
        if (table[i] === 1 || table[i] > n) continue;
        if (i !== table[i] && i === table[table[i]]) amicableSum += table[i];
    }

    return amicableSum;
}

module.exports = { sumAmicableNum };