/* 
Problem 32: Pandigital products

We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.
The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier, and product is 1 through 9 pandigital.
Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1 through n pandigital.
Hint: Some products can be obtained in more than one way so be sure to only include it once in your sum.
*/

function pandigitalProducts(n) {
    let digits = Array(n).fill().map((_, i) => i + 1);
    let maxNum = 10 ** Math.floor(n / 2);
    let pandigitals = new Set();

    for (let num1 = 1; num1 < maxNum; num1++) {
        for (let num2 = num1 + 1; num2 < maxNum; num2++) {
            let num3 = num1 * num2;
            let stringDigits = String(num1) + String(num2) + String(num3);
            let isPandigital = true;

            if (stringDigits.length > n) break;
            if (stringDigits.length < n) continue;

            for (let digit of digits) {
                if (!stringDigits.includes(digit)) isPandigital = false;
            }
            
            if (isPandigital) pandigitals.add(num3);
        }
    }

    return [...pandigitals].reduce((a, b) => a + b, 0);
}

module.exports = { pandigitalProducts };