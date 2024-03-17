/* 
Problem 110: Diophantine Reciprocals II

In the following equation x, y, and n are positive integers.
1/x+1/y=1/n
It can be verified that when n = 1260 there are 113 distinct solutions and this is the least value of n for which the total number of distinct solutions exceeds one hundred.
What is the least value of n for which the number of distinct solutions exceeds four million?
Note: This problem is a much more difficult version of Problem 108 and as it is well beyond the limitations of a brute force approach it requires a clever implementation.
*/

function diophantine(minSolutions = 4000000) {
    let factors = [];

    for (let solutions = 0; solutions <= minSolutions; solutions = countSolutions(factors)) {
        factors.push(1);
    }

    let primes = getPrimes(factors.length);
    let bestResult = { num: Infinity, factors: Infinity };

    diophantineAux(primes, minSolutions, bestResult, [1], 2);

    return bestResult.num;
}

function diophantineAux(primes, minSolutions, bestResult, factors, num) {
    if (num >= bestResult.num) return;

    let solutions = countSolutions(factors);

    if (solutions > minSolutions) {
        bestResult.num = num;
        bestResult.factors = factors.length;
        return;
    }

    if (factors.length < primes.length && bestResult.factors > factors.length + 1) {
        let memo = bestResult.num;

        diophantineAux(primes, minSolutions, bestResult, [...factors, 1], num * primes[factors.length]);

        if (memo === bestResult.num) return;
    }

    for (let i = 0; i < factors.length; i++) {
        let newFactors = [...factors];
        newFactors[i]++;

        if (i > 0 && newFactors[i] > newFactors[i - 1]) continue;

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