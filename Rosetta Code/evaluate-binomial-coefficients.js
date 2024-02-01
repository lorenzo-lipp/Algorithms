/* 
Evaluate binomial coefficients

Write a function to calculate the binomial coefficient for the given value of n and k.
This formula is recommended:
(nk)=n!/((n−k)!k!)=(n(n−1)(n−2)…(n−k+1))/(k(k−1)(k−2)…1)
*/

function binom(n, k) {
    return factorial(n) / (factorial(n - k) * factorial(k));
}

function factorial(num) {
    let result = 1;

    for (let i = 2; i <= num; i++) {
        result *= i;
    }

    return result;
}

module.exports = { binom };