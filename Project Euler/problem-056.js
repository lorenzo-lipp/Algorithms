/* 
Problem 56: Powerful digit sum

A googol (10^100) is a massive number: one followed by one-hundred zeros;  
100^100 is almost unimaginably large: one followed by two-hundred zeros. 
Despite their size, the sum of the digits in each number is only 1.
Considering natural numbers of the form, a^b, where a, b < n, what is the maximum digital sum? 
*/

function powerfulDigitSum(n) {
    let maximum = 0;

    for (let i = 1; i < n; i++) {
        for (let j = 1; j < n; j++) {
            let power = bigIntPower(i, j);
            maximum = Math.max(maximum, sumDigits(power));
        }
    }

    return maximum;
}

function sumDigits(num) {
    let numStr = String(num);
    let accumulator = 0;
    
    for (let i = 0; i < numStr.length; i++) {
        accumulator += +numStr[i];
    }

    return accumulator;
}

function bigIntPower(a, b) {
    return BigInt(a) ** BigInt(b);
}

module.exports = { powerfulDigitSum };