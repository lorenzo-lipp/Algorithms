/* 
Problem 111: Primes with runs

Considering 4-digit primes containing repeated digits it is clear that they cannot all be the same: 1111 is divisible by 11, 2222 is divisible by 22, and so on. 
But there are nine 4-digit primes containing three ones:
1117,1151,1171,1181,1511,1811,2111,4111,8111
We shall say that M(n,d) represents the maximum number of repeated digits for an n-digit prime where d is the repeated digit,  
N(n,d) represents the number of such primes, and 
S(n,d) represents the sum of these primes.
So M(4,1)=3 is the maximum number of repeated digits for a 4-digit prime where one is the repeated digit, 
there are N(4,1)=9 such primes, and the sum of these primes is S(4,1)=22275. 
It turns out that for d = 0, it is only possible to have M(4,0)=2 repeated digits, but there are N(4,0)=13 such cases.
In the same way we obtain the following results for 4-digit primes.
Digit,d     M(4,d)      N(4,d)      S(4,d)
0           2           13      	67061
1           3           9	        22275
2           3           1	        2221
3           3           12      	46214
4           3           2	        8888
5           3           1	        5557
6           3           1	        6661
7           3           9	        57863
8           3           1	        8887
9           3           7	        48073
For d = 0 to 9, the sum of all S(4,d) is 273700. 
Find the sum of all S(10,d).
*/

/**
 * Computes the sum of all S(n, d)
 * @param {number} n - Number of digits
 * @returns {number}
*/
function primesWithRuns(n = 10) {
    let sum = 0;

    for (let d = 0; d < 10; d++) {
        sum += maximumRepeatedDigits(n, d);
    }

    return sum;
}

/**
 * Computes the sum of S(n, d)
 * @param {number} n - Number of digits
 * @param {number} d - Digit to be repeated
 * @returns {number}
*/
function maximumRepeatedDigits(n, d) {
    for (let repetitions = n - 1; repetitions >= 1; repetitions--) {
        let sum = findPrimes(n, d, repetitions);

        if (sum > 0) return sum;
    }

    return 0;
}

/**
 * @param {number} n - Number of digits
 * @param {number} d - Digit to be repeated
 * @param {number} repetitions - Digit repetition count
*/
function findPrimes(n, d, repetitions) {
    let permutations = new Set();
    let minVal = 10 ** (n - 1) - 1;
    let maxVal = 10 ** (n - repetitions);

    for (let num = 1; num < maxVal; num++) { 
        let str = String(num).padStart(n - repetitions, "0");

        if (isStringSorted(str)) {
            let arr = Array(n);

            for (let i = 0; i < repetitions; i++) arr[i] = d;
            for (let i = repetitions; i < n; i++) arr[i] = +str[i - repetitions];

            getPermutations(arr, n, permutations, minVal);
        }
    }

    return [...permutations].reduce((a, b) => a + (isPrime(b) ? b : 0), 0);
}

/**
 * Return true if n is prime, false otherwise
 * @param {number} n - Number to analyze
 * @returns {boolean}
*/
function isPrime(n) {
    if (n % 2 === 0) return n === 2;

    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) return false;
    }

    return true;
}

/**
 * Computes all unique permutations of a number
 * @param {Array} arr - Number's digits
 * @param {number} size - Array length
 * @param {Set} permutations - A set to store computed permutations
 * @param {number} minVal - Minimum value to permutation
 */
function getPermutations(arr, size, permutations, minVal) {
    let changed = true;

    if (size == 1) {
        let result = arr.reduce((acc, v, i) => acc + v * 10 ** i, 0);

        if (result > minVal) permutations.add(result);
        return;
    }

    for (let i = 0; i < size; i++) {
        if (changed) getPermutations(arr, size - 1, permutations, minVal);

        if (size % 2 == 1) {
            [arr[0], arr[size - 1]] = [arr[size - 1], arr[0]];
        } else {
            [arr[i], arr[size - 1]] = [arr[size - 1], arr[i]]; 
            changed = arr[i] !== arr[size - 1];
        }
    }
}

/**
    Returns true if a string is sorted, false otherwise
    @param {string} str - String to check
    @returns {boolean}
*/
function isStringSorted(str) {
    for (let i = 0; i < str.length - 1; i++) {
        if (str[i] > str[i + 1]) return false;
    }

    return true;
}

module.exports = { primesWithRuns };