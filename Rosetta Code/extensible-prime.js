/* 
Extensible prime generator

Write a generator of prime numbers, in order, that will automatically adjust to accommodate the generation of any reasonably high prime.
The generator should be able to:
Show the first n prime numbers
Show the prime numbers in a range
Show the number of primes in a range
Show the nth prime number
The function should have two parameters. 
The first will receive n or the range as an array. 
The second will receive a boolean, that specifies if the function returns the prime numbers as an array or a single number(the number of primes in the range or the nth prime). 
According to the parameters the function should return an array.
*/

function primeGenerator(num, isList) {
    if (!Array.isArray(num) && !isList) return nthPrime(num);
    if (!Array.isArray(num) && isList) return firstNPrimes(num);
    if (Array.isArray(num) && !isList) return countPrimesAtInterval(num[0], num[1]);
    if (Array.isArray(num) && isList) return primesAtInterval(num[0], num[1]);
}

function firstNPrimes(n) {
    let primes = [2];
    let value = 3;

    const isPrime = (num) => {
        let numSqrt = Math.sqrt(num);
        for (let prime of primes) {
            if (prime > numSqrt) return true;
            if (num % prime === 0) return false;
        }
        return false;
    };

    while (primes.length < n) {
        if (isPrime(value)) primes.push(value);
        value += 2;
    }

    return primes;
}

function nthPrime(n) {
    let primes = firstNPrimes(n);
    return primes[primes.length - 1];
}

function primesUpTo(n) {
    let primes = [2];
    let value = 3;

    const isPrime = (num) => {
        let numSqrt = Math.sqrt(num);
        for (let prime of primes) {
            if (prime > numSqrt) return true;
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

function primesAtInterval(a, b) {
    return primesUpTo(b).filter(v => v >= a);
}

function countPrimesAtInterval(a, b) {
    return primesAtInterval(a, b).length;
}

module.exports = { primeGenerator };