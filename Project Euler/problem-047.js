/* 
Problem 47: Distinct primes factors

The first two consecutive numbers to have two distinct prime factors are:
14 = 2 × 7
15 = 3 × 5
The first three consecutive numbers to have three distinct prime factors are:
644 = 22 × 7 × 23
645 = 3 × 5 × 43
646 = 2 × 17 × 19
Find the first four consecutive integers to have four distinct prime factors each. What is the first of these numbers?
*/

function distinctPrimeFactors(targetNumPrimes, targetConsecutive) {
    let sequence = 0;

    for (let num = 1; true; num++) {
        if (getFactorAmount(num) === targetNumPrimes) {
            sequence++;
        } else {
            sequence = 0;
        }

        if (sequence === targetConsecutive) return num - sequence + 1;
    }
}

function getFactorAmount(num) {
    let val = 2;
    let factors = new Set();

    while (num > 1) {
        if (num % val === 0) {
            num /= val;
            factors.add(val);
        } else {
            val++;
        }
    }

    return factors.size;
}

module.exports = { distinctPrimeFactors };