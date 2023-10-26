/* 
Problem 50: Consecutive prime sum

The prime 41, can be written as the sum of six consecutive primes:
41 = 2 + 3 + 5 + 7 + 11 + 13
This is the longest sum of consecutive primes that adds to a prime below one-hundred.
The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms, and is equal to 953.
Which prime, below one-million, can be written as the sum of the most consecutive primes?
*/

function consecutivePrimeSum(limit) {
    const primes = primesUpTo(limit);
    const sums = Array(primes.length).fill(0);

    sums[0] = primes[0];

    for (let i = 1; i < sums.length; i++) {
        sums[i] = sums[i - 1] + primes[i];
    }

    let maxConsecutives = sums.findIndex(v => v >= limit);

    for (let i = maxConsecutives; i > 0; i--) {
        for (let j = sums.length - i - 1; j >= 0; j--) {
            let consecutiveSum = sums[j + i] - sums[j];

            if (consecutiveSum > limit) continue;
            if (primes.includes(consecutiveSum)) return consecutiveSum;
        }
    }

    return null;
}

function primesUpTo(n) {
    let primes = [2];
    let value = 3;

    const isPrime = (num) => {
        for (let prime of primes) {
            if (prime > Math.sqrt(num)) return true;
            if (num % prime === 0) return false;
        }
        return false;
    };

    while (value < n) {
        if (isPrime(value)) primes.push(value);
        value += 2;
    }

    return primes;
}

module.exports = { consecutivePrimeSum };