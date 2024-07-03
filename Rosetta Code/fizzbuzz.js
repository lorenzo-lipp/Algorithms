/* 
FizzBuzz

Write a program that generates an array of integers from 1 to 100 (inclusive). But:
for multiples of 3, add "Fizz" to the array instead of the number
for multiples of 5, add "Buzz" to the array instead of the number
for multiples of 3 and 5, add "FizzBuzz" to the array instead of the number
Your program should return an array containing the results based on the rules above.
*/

function fizzBuzz() {
    let arr = Array(100).fill().map((_, i) => i + 1);

    for (let i = 2; i < 100; i += 3) arr[i] = "Fizz";
    for (let i = 4; i < 100; i += 5) arr[i] = arr[i] === "Fizz" ? "FizzBuzz" : "Buzz";

    return arr;
}

module.exports = { fizzBuzz };