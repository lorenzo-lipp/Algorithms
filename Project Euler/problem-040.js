/* 
Problem 40: Champernowne's constant

An irrational decimal fraction is created by concatenating the positive integers:
0.123456789101112131415161718192021...
It can be seen that the 12th digit of the fractional part is 1.
If dn represents the nth digit of the fractional part, find the value of the following expression.
d1 × d10 × d100 × d1000 × d10000 × d100000 × d1000000
*/

function champernownesConstant(n) {
    let logaritm = Math.log10(n);
    if (logaritm !== Math.floor(logaritm)) throw new Error("Input should be a power of 10");

    let product = 1;

    while (n >= 1) {
        product *= getDigit(n);
        n /= 10;
    }

    return product;
}

function getDigit(n) {
    if (n < 10) return n;

    for (let i = 1, digits = 1, nextTreshold = 10; true; i++) {
        if (i === nextTreshold) {
            nextTreshold *= 10;
            digits++;
        }

        if (n <= digits) {
            return +String(i)[n - 1];
        } else {
          n -= digits;  
        }
    }
}

module.exports = { champernownesConstant };