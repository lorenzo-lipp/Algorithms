/* 
Problem 87: Prime power triples

The smallest number expressible as the sum of a prime square, prime cube, and prime fourth power is 28. 
In fact, there are exactly four numbers below fifty that can be expressed in such a way:
28 = 2^2 + 2^3 + 2^4
33 = 3^2 + 2^3 + 2^4
49 = 5^2 + 2^3 + 2^4
47 = 2^2 + 3^3 + 2^4
How many numbers below n can be expressed as the sum of a prime square, prime cube, and prime fourth power?
*/

function primePowerTriples(n) {
    let primes = [2];
    let numbers = new Set();

    while (n - (primes[primes.length - 1] ** 2 + 4 + 8) > 0) {
        getNextPrime(primes);
    }

    for (let a = 0; a < primes.length; a++) {
        let sqr = primes[a] ** 2;

        for (let b = 0; b < primes.length; b++) {
            let cube = primes[b] ** 3;

            for (let c = 0; c < primes.length; c++) {
                let fourth = primes[c] ** 4;
                let sum = sqr + cube + fourth;

                if (sum < n) {
                    numbers.add(sum);
                } else {
                    break;
                }
            }
        }
    }

    return numbers.size;
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

module.exports = { primePowerTriples };