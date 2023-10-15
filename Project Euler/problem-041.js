/* 
Problem 41: Pandigital prime

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once. For example, 2143 is a 4-digit pandigital and is also prime.
What is the largest n-length digit pandigital prime that exists?
*/

function pandigitalPrime(n) {
    let digits = Array(n).fill().map((_, i) => (i + 1));
    let pandigitals = [];
    let biggerPrime = null;

    getPermutations(digits, n, pandigitals);

    for (let pandigital of pandigitals) {
        if (pandigital > biggerPrime && isPrime(pandigital)) {
            biggerPrime = pandigital;
        }
    }

    return biggerPrime;
}

function getPermutations(arr, size, permutations) {
    if (size == 1) {
        permutations.push(arr.reduce((acc, v, i) => acc + v * 10 ** i, 0));
        return;
    }

    for (let i = 0; i < size; i++) {
        getPermutations(arr, size - 1, permutations);

        if (size % 2 == 1) {
            [arr[0], arr[size - 1]] = [arr[size - 1], arr[0]];
        } else {
            [arr[i], arr[size - 1]] = [arr[size - 1], arr[i]];
        }
    }
}

function isPrime(num) {
    if (num % 2 === 0) return false;

    let maxNum = Math.sqrt(num);

    for (let divisor = 3; divisor <= maxNum; divisor += 2) {
        if (num % divisor === 0) return false;
    }

    return true;
}

module.exports = { pandigitalPrime };