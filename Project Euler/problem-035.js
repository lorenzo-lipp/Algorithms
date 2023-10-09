/* 
Problem 35: Circular primes

The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719, are themselves prime.
There are thirteen such primes below 100: 2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
How many circular primes are there below n, whereas 100 ≤ n ≤ 1000000?
Note:
Circular primes individual rotation can exceed n.
*/

function circularPrimes(n) {
    let primesList = primesUpTo(10 ** Math.ceil(Math.log10(n)));
    let primesToCheck = { };
    let circularPrimes = 0;

    for (let prime of primesList) {
        primesToCheck[prime] = prime < n;
    }

    for (let prime in primesToCheck) {
        if (primesToCheck[prime]) {
            let rotations = getRotations(+prime);
            let isCircular = true;

            for (let i = 0; i < rotations.length; i++) {
                if (!(rotations[i] in primesToCheck)) {
                    isCircular = false;
                    break;
                }
            }  
            
            if (isCircular) circularPrimes++;
        }
    }

    return circularPrimes;
}

function getRotations(prime) {
    let rotations = [];
    let num = prime;
    let exponent = 10 ** String(prime).length;

    while (true) {
        num *= 10;
        let firstDigit = Math.floor(num / exponent);
        num += firstDigit;
        num -= firstDigit * exponent;

        if (num === prime) break;
        rotations.push(num);
    }

    return rotations;
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

module.exports = { circularPrimes };