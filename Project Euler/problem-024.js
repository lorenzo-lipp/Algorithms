/* 
Problem 24: Lexicographic permutations

A permutation is an ordered arrangement of objects. 
For example, 3124 is one possible permutation of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically, we call it lexicographic order. 
The lexicographic permutations of 0, 1 and 2 are:
012   021   102   120   201   210
What is the nth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

function lexicographicPermutations(n) {
    if (n >= 3628800) return new Error("Number too big");

    let remainingDigits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let digits = [];

    while (digits.length !== 9) {
        let permutationsStartingWithEach = factorial(remainingDigits.length - 1);
        let nextDigit = getFirstDigitPosition(n + 1, permutationsStartingWithEach);

        digits.push(remainingDigits[nextDigit]);
        remainingDigits = remainingDigits.filter((v) => v !== remainingDigits[nextDigit]);
        n -= nextDigit * permutationsStartingWithEach;
    }
    
    digits.push(remainingDigits[0]);

    return (+digits.join(""));
}

function getFirstDigitPosition(n, permutationsStartingWithEach) {
    return Math.abs(Math.ceil(n / permutationsStartingWithEach - 1));
}

function factorial(n) {
    if (n < 2) return 1;
    return n * factorial(n - 1);
}

module.exports = { lexicographicPermutations };