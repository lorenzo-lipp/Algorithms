/* 
Ethiopian multiplication

Ethiopian multiplication is a method of multiplying integers using only addition, doubling, and halving.
Method:
Take two numbers to be multiplied and write them down at the top of two columns
In the left-hand column repeatedly halve the last number, discarding any remainders, and write the result below the last in the same column, until you write a value of 1.
In the right-hand column repeatedly double the last number and write the result below. 
Stop when you add a result in the same row as where the left hand column shows 1
Examine the table produced and discard any row where the value in the left column is even
Sum the values in the right-hand column that remain to produce the result of multiplying the original two numbers together
For example: 17 × 34
Halving the first column:
17   34
8
4
2
1

Doubling the second column:
17   34
8    68
4   136
2   272
1   544

Strike-out rows whose first cell is even:
17   34
8   ---
4   ---
2   ---
1   544

Sum the remaining numbers in the right-hand column:
17   34
8    --
4   ---
2   ---
1   544
   ====
    578

So 17 multiplied by 34, by the Ethiopian method is 578.
The task is to define three named functions/methods/procedures/subroutines:
one to halve an integer,
one to double an integer, and
one to state if an integer is even
Use these functions to create a function that does Ethiopian multiplication.
*/

function halveInt(num) { return Math.floor(num / 2); }
function doubleInt(num) { return num * 2; }
function isEven(num) { return num % 2 === 0; } 

function eth_mult(a, b) {
    let firstRow = [];
    let secondRow = [];

    while (a >= 1) {
        firstRow.push(a);
        a = halveInt(a);
        secondRow.push(b);
        b = doubleInt(b);
    }

    for (let i = 0; i < firstRow.length; i++) {
        if (isEven(firstRow[i])) {
            secondRow[i] = 0;
        }
    }

    return secondRow.reduce((a, b) => a + b, 0);
}

module.exports = { eth_mult };