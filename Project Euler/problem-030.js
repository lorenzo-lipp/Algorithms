/* 
Problem 30: Digit n powers

Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:
1634 = 1^4 + 6^4 + 3^4 + 4^4
8208 = 8^4 + 2^4 + 0^4 + 8^4
9474 = 9^4 + 4^4 + 7^4 + 4^4
As 1 = 1^4 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of n powers of their digits.
*/

function digitnPowers(n) {
    let sum = 0;
    let digits = Array(2).fill(1);
    let powers = Array(10).fill().map((_, i) => i ** n);
    let maxDigits = String((n + 1) * powers[9]).length;

    while (digits.length <= maxDigits) {
        let acc = 0;

        for (let digit of digits) acc += powers[digit];

        let accString = String(acc);
        let shouldSum = accString.length === digits.length;

        for (let i = 0; shouldSum && i < digits.length; i++) {
            if (+accString[i] !== digits[i]) shouldSum = false;
        }

        if (shouldSum) sum += acc;

        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] === 9) {
                digits[i] = 0;
                if (i === 0) {
                    digits[0] = 1;
                    digits.push(1);
                }
            } else {
                digits[i]++;
                break;
            }
        }
        
    }
    
    return sum;
}

module.exports = { digitnPowers };