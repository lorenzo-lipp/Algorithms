/* 
Problem 112: Bouncy numbers

Working from left-to-right if no digit is exceeded by the digit to its left it is called an increasing number; for example, 134468.
Similarly if no digit is exceeded by the digit to its right it is called a decreasing number; for example, 66420.
We shall call a positive integer that is neither increasing nor decreasing a "bouncy" number; for example, 155349.
Clearly there cannot be any bouncy numbers below one-hundred, but just over half of the numbers below one-thousand (525) are bouncy. 
In fact, the least number for which the proportion of bouncy numbers first reaches 50% is 538.
Surprisingly, bouncy numbers become more and more common and by the time we reach 21780 the proportion of bouncy numbers is equal to 90%.
Find the least number for which the proportion of bouncy numbers is exactly 99%.
*/

/**
 * Finds the least number for which the proportion of bouncy numbers is at least p
 * @param {number} p - Percent of bouncy numbers
 * @returns {number}
*/
function bouncyNumbers(p = 0.99) {
    let bouncyCount = 0;

    for (let n = 101; true; n++) {
        if (isBouncyNumber(n)) bouncyCount++;

        if (p <= bouncyCount / n) return n;
    }
}

/**
 * Returns true if n is a bouncy number
 * @param {number} n - Number to test
 * @returns {boolean}
 */
function isBouncyNumber(n) {
    let lastDigit = n % 10;
    let isIncreasing = true;
    let isDecreasing = true;

    n = Math.floor(n / 10);

    while (n > 0) {
        let digit = n % 10;
        n = Math.floor(n / 10);

        isIncreasing = isIncreasing && lastDigit >= digit;
        isDecreasing = isDecreasing && lastDigit <= digit;

        lastDigit = digit;

        if (!isIncreasing && !isDecreasing) return true;
    }

    return false;
}

module.exports = { bouncyNumbers };