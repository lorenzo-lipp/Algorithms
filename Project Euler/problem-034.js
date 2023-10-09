/* 
Problem 34: Digit factorials

145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
Find the numbers and the sum of the numbers which are equal to the sum of the factorial of their digits.
Note: as 1! = 1 and 2! = 2 are not sums they are not included.
*/

function digitFactorial() {
    let numbers = [];
    let factorials = Array(10).fill(1);

    for (let i = 2; i < 10; i++) {
        factorials[i] = factorials[i - 1] * i;
    }

    for (let num = 10; num <= factorials[9]; num++) {
        let digits = String(num);
        let sum = 0;

        for (let digit of digits) {
            sum += factorials[digit];
        }

        if (sum === num) numbers.push(num);
    }

    return { sum: numbers.reduce((a, b) => a + b, 0), numbers };
}

module.exports = { digitFactorial };