/* 
Problem 72: Counting fractions

Consider the fraction, n/d, where n and d are positive integers. 
If n < d and highest common factor, HCF(n,d)=1, it is called a reduced proper fraction.
If we list the set of reduced proper fractions for d ≤ 8 in ascending order of size, we get:
1/8,1/7,1/6,1/5,1/4,2/7,1/3,3/8,2/5,3/7,1/2,4/7,3/5,5/8,2/3,5/7,3/4,4/5,5/6,6/7,7/8
It can be seen that there are 21 elements in this set.
How many elements would be contained in the set of reduced proper fractions for d ≤ limit?
*/

function countingFractions(limit) {
    let acc = 0;
    let sieve = erathosthenesSieve(limit);

    for (let i = 1; i < sieve.length; i++) {
        acc += phi(sieve[i]);
    }

    return acc;
}

function phi(sieve) {
    let result = sieve[0];

    for (let i = 0; i < sieve[1].length; i++) {
        let prime = sieve[1][i];

        result -= result / prime;
    }

    return result;
}

function erathosthenesSieve(limit) {
    let result = Array(limit).fill().map((_, i) => [i + 1, []]);

    for (let n = 2; n <= limit; n++) {
        if (result[n - 1][1].length) continue;

        for (let k = 1, multiple = n * k; multiple <= limit; k++, multiple = n * k) {
            result[multiple - 1][1].push(n);
        }
    }

    return result;
}

module.exports = { countingFractions };