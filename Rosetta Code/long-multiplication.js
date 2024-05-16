/* 
Long multiplication

Explicitly implement long multiplication.
This is one possible approach to arbitrary-precision integer algebra.
Write a function that takes two strings of large numbers as parameters. 
Your function should return the product of these two large numbers as a string.
Note: In JavaScript, arithmetic operations are inaccurate with large numbers, so you will have to implement precise multiplication yourself. 
*/

function mult(strNum1, strNum2) { return String(BigInt(strNum1) * BigInt(strNum2)); }

module.exports = { mult };