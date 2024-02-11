/* 
Left factorials

Left factorials, !n, may refer to either subfactorials or to factorial sums. 
The same notation can be confusingly seen used for the two different definitions. 
Sometimes, subfactorials (also known as derangements) may use any of the notations: !n‘, !n, n¡
(It may not be visually obvious, but the last example uses an upside-down exclamation mark.) 
This task will be using this formula for left factorial:
!n=∑ n−1 k=0k!
where !0=0 
Write a function to calculate the left factorial of a given number.
*/

function leftFactorial(n) {
    let result = n < 1 ? 0 : 1;
    let lastFactorial = 1;

    for (let i = 1; i < n; i++) {
        lastFactorial *= i;
        result += lastFactorial;
    }

    return result;
}

module.exports = { leftFactorial };