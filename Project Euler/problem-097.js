/* 
Problem 97: Large non-Mersenne prime
The first known prime found to exceed one million digits was discovered in 1999, and is a Mersenne prime of the form 2^6972593 − 1; it contains exactly 2,098,960 digits. 
Subsequently other Mersenne primes, of the form 2^p − 1, have been found which contain more digits.
However, in 2004 there was found a massive non-Mersenne prime which contains 2,357,207 digits: 28433 × 2^7830457 + 1.
Find the last ten digits of that non-Mersenne prime in the form  multiplier × 2^power + 1.
*/

function largeNonMersennePrime(multiplier, power) {
    let overflow = 10 ** 10;
    let num = multiplier;

    while (power > 0) {
        num *= 2;
        num %= overflow;
        power--;
    }

    return String((num + 1) % overflow).padStart(10, "0");
}

module.exports = { largeNonMersennePrime };