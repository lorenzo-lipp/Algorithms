/* 
Happy numbers

A happy number is defined by the following process:
Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. 
Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers.
Implement a function that returns true if the number is happy, or false if not.
*/

function happy(number) {
    let set = new Set();

    while (number !== 1) {
        if (set.has(number)) return false;

        set.add(number);
        number = sumSquareDigits(number);
    }

    return true;
}

function sumSquareDigits(n) {
    let result = 0;

    while (n > 0) {
        let remainder = n % 10;
        result += remainder ** 2;
        n -= remainder;
        n /= 10;
    }

    return result;
}

module.exports = { happy };