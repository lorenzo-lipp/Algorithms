/* 
Problem 28: Number spiral diagonals

Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is formed as follows:
[21]  22  23  24 [25]
 20  [7]  8  [9]  10
 19   6  [1]  2   11
 18  [5]  4  [3]  12
[17] 16  15  14  [13]
It can be verified that the sum of the numbers on the diagonals is 101.
What is the sum of the numbers on the diagonals in an n by n spiral formed in the same way?
*/

function spiralDiagonals(n) {
    let sum = 1;
    let lastPicked = 1;

    for (let i = 2; i <= n; i += 2) {
        for (let val = 1; val <= 4; val++) {
            sum += lastPicked + i * val;
        }
        lastPicked = lastPicked + 4 * i;
    }

    return sum;
}

module.exports = { spiralDiagonals };