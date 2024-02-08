/* 
Fibonacci sequence

Write a function to generate the nth Fibonacci number.
The nth Fibonacci number is given by:
Fn = Fn-1 + Fn-2
The first two terms of the series are 0 and 1.
Hence, the series is: 0, 1, 1, 2, 3, 5, 8, 13...
*/

function fibonacci(n) {
    let last2Terms = [0, 1];
    
    for (let i = 2; i <= n; i++) {
        let nextTerm = last2Terms[0] + last2Terms[1];

        last2Terms[0] = last2Terms[1];
        last2Terms[1] = nextTerm;
    }

    return last2Terms[1];
}

module.exports = { fibonacci };