/* 
Problem 20: Factorial digit sum

n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits n!
*/

function sumFactorialDigits(n) {
    let digits = [ 1 ];

    for (let num = 1; num <= n; num++) {
        for (let index = digits.length - 1; index >= 0; index--) {
            let digit = digits[index]
            let result = digit * num;

            for (let i = Math.floor(Math.log10(result)); i > 0; i--) {
                let indexToChange = (+index) + i;
                let exponent = 10 ** i;
                let remainder = Math.floor(result / exponent);
                result -= remainder * exponent;

                addToDigit(digits, indexToChange, remainder);
            }

            digits[index] = result;
        }
    }

    return digits.reduce((a, b) => a + b);
}

function addToDigit(digitsArr, indexToChange, valueToAdd) {
    if (digitsArr[indexToChange] !== undefined) {
        if (digitsArr[indexToChange] + valueToAdd < 10) {
            digitsArr[indexToChange] += valueToAdd;
        } else {
            digitsArr[indexToChange] += valueToAdd - 10;
            addToDigit(digitsArr, indexToChange + 1, 1);
        }
    } else {
        digitsArr[indexToChange] = valueToAdd;
    }
}

module.exports = { sumFactorialDigits };