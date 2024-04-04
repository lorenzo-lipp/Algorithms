/* 
Factors of an integer

Write a function that returns the factors of a positive integer as an array.
These factors are the positive integers by which the number being factored can be divided to yield a positive integer result.
*/

function factors(num) {
    let result = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) result.push(i);
    }

    return result;
}

module.exports = { factors };