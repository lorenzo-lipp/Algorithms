/* 
Problem 80: Square root digital expansion

It is well known that if the square root of a natural number is not an integer, then it is irrational. 
The decimal expansion of such square roots is infinite without any repeating pattern at all.
The square root of two is 1.41421356237309504880..., and the digital sum of the first one hundred decimal digits is 475.
For the first n natural numbers, find the total of the digital sums of the first one hundred decimal digits for all the irrational square roots.
*/

function sqrtDigitalExpansion(n) {
    let acc = 0;

    for (let m = 1; m <= n; m++) {
        acc += sqrtHundredDigitsSum(m);
    }

    return acc;
}

function sqrtHundredDigitsSum(a) {
    let digits = partitionDigits(a);
    let remainder = BigInt(digits.pop());
    let p = 0n;
    let sum = 0;
    let decimalDigits = 0;

    while (decimalDigits !== 100 && remainder !== 0n) {
        let x = 0n;

        while ((x + 1n) * (20n * p + (x + 1n)) <= remainder) x++;

        remainder -= x * (20n * p + x);
        remainder *= 100n;
        p *= 10n;
        p += x;

        if (digits.length) {
            remainder += BigInt(digits.pop());
        } else {
            sum += parseInt(x);
            decimalDigits++;
        }
    }

    return decimalDigits === 100 ? sum : 0;
}

function partitionDigits(a) {
    let arr = [];

    while (a > 0) {
        let remainder = a % 100;

        arr.push(remainder);
        a -= remainder;
        a /= 100;
    }

    return arr
}

module.exports = { sqrtDigitalExpansion };