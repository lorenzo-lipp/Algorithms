/* 
Problem 37: Truncatable primes

The number 3797 has an interesting property. 
Being prime itself, it is possible to continuously remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. 
Similarly we can work from right to left: 3797, 379, 37, and 3.
Find the sum of the only n (8 ≤ n ≤ 11) primes that are both truncatable from left to right and right to left.
NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
*/

function truncatablePrimes(n) {
    let primes = [2, 3, 5, 7];
    let primesHash = { "2": true, "3": true, "5": true, "7": true };
    let truncatable = 0;
    let sum = 0;

    while (truncatable < n) {
        let prime = getNextPrime(primes);
        let fromRight = prime;
        let fromLeft = prime;
        let iterations = Math.floor(Math.log10(prime));
        let isTruncatable = true;
        primesHash[prime] = true;

        for (let i = 0; i < iterations; i++) {
            fromRight = truncateFromRight(fromRight);
            fromLeft = truncateFromLeft(fromLeft);

            if (!(fromLeft in primesHash) || !(fromRight in primesHash)) {
                isTruncatable = false;
                break;
            }
        }


        if (isTruncatable) {
            truncatable++;
            sum += prime;
        }
    }

    return sum;
}

function truncateFromRight(num) {
    return num % 10 ** Math.floor(Math.log10(num));
}

function truncateFromLeft(num) {
    return (num - num % 10) / 10;
}

function getNextPrime(primes) {
    let value = primes[primes.length - 1] + 1;

    const isPrime = (num) => {
        for (let prime of primes) {
            if (prime > Math.sqrt(num)) return true;
            if (num % prime === 0) return false;
        }
        return false;
    };

    while (!isPrime(value)) {
        value++;
    }

    primes.push(value);
    return value;
}

module.exports = { truncatablePrimes };