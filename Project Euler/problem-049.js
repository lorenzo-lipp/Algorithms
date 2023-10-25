/* 
Problem 49: Prime permutations

The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual in two ways: 
(i) each of the three terms are prime, and, 
(ii) each of the 4-digit numbers are permutations of one another.
There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this property, but there is one other 4-digit increasing sequence.
What 12-digit number do you form by concatenating the three terms in this sequence?
*/

function primePermutations() {
    let primes = fourDigitsPrimes();    

    for (let i = 0; i < primes.length; i++) {
        if (primes[i] === 1487) continue;

        for (let j = i + 1; j < primes.length; j++) {
            let diff = primes[j] - primes[i];

            if (strSorted(primes[i]) === strSorted(primes[j])
                && primes.includes(primes[j] + diff)
                && strSorted(primes[i]) === strSorted(primes[j] + diff)
            ) {
                return primes[i] * 10 ** 8 + primes[j] * 10 ** 4 + (primes[j] + diff);
            }
        }
    }
}
  
function strSorted(num) {
    return String(num).split("").sort().join("");
}

function fourDigitsPrimes() {
    let primes = [2];
    let value = 3;
    let n = 10 ** 4;

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

    return primes.filter(v => v >= 1000);
}

module.exports = { primePermutations };