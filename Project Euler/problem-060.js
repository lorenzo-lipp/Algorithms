/* 
Problem 60: Prime pair sets

The primes 3, 7, 109, and 673, are quite remarkable. 
By taking any two primes and concatenating them in any order the result will always be prime. 
For example, taking 7 and 109, both 7109 and 1097 are prime. 
The sum of these four primes, 792, represents the lowest sum for a set of four primes with this property.
Find the lowest sum for a set of five primes for which any two primes concatenate to produce another prime.
*/

function primePairSets(maxPrimeToCheck = 9000) {
    let lowestSum = Infinity;
    let primes = primesUpTo(maxPrimeToCheck);

    for (let i = 0; i < primes.length; i++) {
        let pairs = [];

        for (let j = i + 1; j < primes.length; j++) {
            if (isPair(primes[i], primes[j])) {
                pairs.push(primes[j]);
            }
        }

        if (pairs.length > 3) {
            lowestSum = Math.min(lowestSum, groupSum(pairs) + primes[i]);
        }
    }

    return lowestSum;
}

function groupSum(pairs, debug) {
    let lowestSum = Infinity;

    for (let i = 0; i < pairs.length; i++) {
        for (let j = i + 1; j < pairs.length; j++) {
            if (!isPair(pairs[i], pairs[j])) continue;

            for (let k = j + 1; k < pairs.length; k++) {
                if (
                    !isPair(pairs[i], pairs[k]) || 
                    !isPair(pairs[j], pairs[k])
                ) continue;

                for (let m = k + 1; m < pairs.length; m++) {
                    if (
                        isPair(pairs[i], pairs[m]) && 
                        isPair(pairs[j], pairs[m]) && 
                        isPair(pairs[k], pairs[m])
                    ) {
                        lowestSum = Math.min(lowestSum, pairs[i] + pairs[j] + pairs[k] + pairs[m]);
                    }
                }
            }
        }
    }

    return lowestSum;
}

function isPair(a, b) {
    return isPrime(concatenate(a, b)) && isPrime(concatenate(b, a));
}

function concatenate(a, b) {
    let exponent = Math.floor(Math.log10(a)) + 1;
    return a + b * 10 ** exponent;
}

function primesUpTo(n) {
    let primes = [3];
    let value = 5;

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

function isPrime(num) {
    if (num % 2 === 0) return false;

    let maxNum = Math.sqrt(num);

    for (let divisor = 3; divisor <= maxNum; divisor += 2) {
        if (num % divisor === 0) return false;
    }

    return true;
}

module.exports = { primePairSets };