/* 
Sum of squares

Write a function to find the sum of squares of an array of integers. 
*/

function sumSquares(arr) { return arr.reduce((a, b) => a + b ** 2, 0); }

module.exports = { sumSquares };