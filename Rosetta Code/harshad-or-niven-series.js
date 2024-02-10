/* 
Harshad or Niven series

The Harshad or Niven numbers are positive integers ≥ 1 that are divisible by the sum of their digits.
For example, 42 is a Harshad number as 42 is divisible by (4 + 2) without remainder.
Assume that the series is defined as the numbers in increasing order.
Implement a function to generate successive members of the Harshad sequence.
Use it to return an array with ten members of the sequence, starting with first Harshad number greater than n.
*/

function harshadOrNiven(n) {
    let result = [];
    
    for (let i = n + 1; result.length < 10; i++) {
        if (i % sumDigits(i) === 0) result.push(i);
    }

    return result;
}

function sumDigits(num) {
    let result = 0;

    while (num > 0) {
        let remainder = num % 10;
        result += remainder;
        num -= remainder;
        num /= 10;
    }

    return result;
}

module.exports = { harshadOrNiven };