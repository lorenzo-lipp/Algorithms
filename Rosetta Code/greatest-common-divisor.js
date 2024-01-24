/* 
Greatest common divisor

Write a function that returns the greatest common divisor of two integers.
*/

function gcd(a, b) {
    while (b > 0) {
        [a, b] = [b, a];
        b = b % a;
    }

    return a;
}

module.exports = { gcd };