/* 
Problem 108: Diophantine Reciprocals I

In the following equation x, y, and n are positive integers.
1/x+1/y=1/n
For n = 4 there are exactly three distinct solutions:
1/5+1/20=1/4
1/6+1/12=1/4
1/8+1/8=1/4
What is the least value of n for which the number of distinct solutions exceeds one-thousand?
*/

function diophantine(minSolutions = 1000) {
    let factors = [];

    for (let solutions = 0; solutions <= minSolutions; solutions = countSolutions(factors)) {
        factors.push(1);
    }

    let primes = getPrimes(factors.length);
    let bestResult = { num: primes.reduce((a, b) => a * b, 1) };

    diophantineAux(primes, minSolutions, bestResult, [1], 2);

    return bestResult.num;
}

function diophantineAux(primes, minSolutions, bestResult, factors, num) {
    if (num >= bestResult.num) return;

    let solutions = countSolutions(factors);

    if (solutions > minSolutions) bestResult.num = num;

    if (factors.length < primes.length) {
        diophantineAux(primes, minSolutions, bestResult, [...factors, 1], num * primes[factors.length]);
    }

    for (let i = 0; i < factors.length; i++) {
        let newFactors = [...factors];
        newFactors[i]++;

        if (i > 0 && newFactors[i] > newFactors[i - 1]) break;

        diophantineAux(primes, minSolutions, bestResult, newFactors, num * primes[i]);
    }
}

function countSolutions(factors) {
    return (factors.reduce((a, b) => a * (2 * b + 1), 1) + 1) / 2;
}

function getPrimes(size) {
    let primes = [2, 3];

    if (size === 1) return [2];
    
    while (primes.length < size) {
        getNextPrime(primes);
    }

    return primes;
}

function getNextPrime(primes) {
    let value = primes[primes.length - 1] + 1;

    const isPrime = (num) => {
        let numSqrt = Math.sqrt(num);

        for (let prime of primes) {
            if (prime > numSqrt) return true;
            if (num % prime === 0) return false;
        }

        return false;
    };

    while (!isPrime(value)) {
        value++;
    }

    primes.push(value);
}

module.exports = { diophantine };