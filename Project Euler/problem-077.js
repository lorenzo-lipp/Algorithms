/* 
Problem 77: Prime summations

It is possible to write ten as the sum of primes in exactly five different ways:
7 + 3
5 + 5
5 + 3 + 2
3 + 3 + 2 + 2
2 + 2 + 2 + 2 + 2
What is the first value which can be written as the sum of primes in over n ways?
*/

function primeSummations(n) {
    let primes = [2, 3];

    for (let m = 4; true; m++) {
        if (primeSummationsAux(m, primes.length - 1, primes) > n) {
            return m;
        }

        if (m > primes[primes.length - 1]) {
            getNextPrime(primes);
        }
    }
}

function primeSummationsAux(n, lastIndexAdded, primes) {
    if (n === 0) return 1;

    let total = 0;

    for (let i = primes[lastIndexAdded] > n ? lastIndexAdded - 1 : lastIndexAdded; i > -1; i--) {
        total += primeSummationsAux(n - primes[i], i, primes);
    }

    return total;
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
    return value;
}

module.exports = { primeSummations };