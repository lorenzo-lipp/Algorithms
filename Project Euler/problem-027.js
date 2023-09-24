/* 
Problem 27: Quadratic primes

Euler discovered the remarkable quadratic formula:
n^2+n+41
It turns out that the formula will produce 40 primes for the consecutive integer values 0≤n≤39. 
However, when n=40,40^2+40+41=40(40+1)+41 is divisible by 41, and certainly when n=41,41^2+41+41 is clearly divisible by 41.
The incredible formula  n^2−79n+1601 was discovered, which produces 80 primes for the consecutive values 0≤n≤79. 
The product of the coefficients, −79 and 1601, is −126479.
Considering quadratics of the form:
n^2+an+b, where |a|<range and |b|≤range
Find the product of the coefficients, a and  b, for the quadratic expression that produces the maximum number of primes for consecutive values of n, starting with n=0
*/

function quadraticPrimes(range) {
    let primesToTest = primesUpTo(range);
    let maxConsecutive = 0;
    let product = 0;

    for (let key in primesToTest) {
        let prime = primesToTest[key];

        for (let i = 1 - prime; i < prime; i++) {
            for (let n = 0; true; n++) {
                let result = n ** 2 + n * i + prime;
                if (result in primesToTest
                    || (result > range && isPrime(result))) {
                    if (n > maxConsecutive) {
                        maxConsecutive = n;
                        product = prime * i;
                    }
                } else {
                    break;
                }
            }
        }
    }

    return product;
}

function isPrime(n) {
    let maxDivisor = Math.sqrt(n);

    for (let i = 2; i <= maxDivisor; i++) {
        if (n % i === 0) return false; 
    }

    return true;
}

function primesUpTo(n) {
    let primes = {
        "2": 2
    };
    let value = 3;
    const isPrime = (num) => {
        for (let key of Object.keys(primes)) {
            let prime = primes[key];
            if (prime > Math.sqrt(num)) return true;
            if (num % prime === 0) return false;
        }
        return false;
    };

    while (value < n) {
        if (isPrime(value)) primes[value] = value;
        value += 2;
    }

    return primes;
}

module.exports = { quadraticPrimes };