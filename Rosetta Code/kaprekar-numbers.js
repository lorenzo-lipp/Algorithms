/* 
Kaprekar numbers

A positive integer is a Kaprekar number if:
It is 1, or,
The decimal representation of its square may be split once into two parts consisting of positive integers which sum to the original number.
Note that a split resulting in a part consisting purely of 0s is not valid, as 0 is not considered positive.
Example Kaprekar numbers:
2223 is a Kaprekar number, as 2223 * 2223 = 4941729, 4941729 may be split to 494 and 1729, and 494 + 1729 = 2223
The series of Kaprekar numbers is known as A006886, and begins as 1, 9, 45, 55, ...
Write a function that takes a number $n$, a base $bs$, and returns true if the number is a Kaprekar number for the given base. Otherwise, the function returns false.
*/

/**
 * Returns true if number is a Keprakar number for the given base, false otherwise.
 * @param {number} n - number
 * @param {number} base - base
 * @returns {boolean}
 */
function isKaprekar(n, base) {
    let nSquared = n * n;
    let squareStr = nSquared.toString(base);

    for (let i = 0; i < squareStr.length; i++) {
        let firstNumber = parseInt(squareStr.slice(0, i + 1), base);
        let secondNumber = parseInt(squareStr.slice(i + 1), base);

        if (secondNumber === 0) continue;
        if (firstNumber === n && isNaN(secondNumber)) return true;
        if (firstNumber + secondNumber === n) return true;
    }

    return false;
}

module.exports = { isKaprekar };