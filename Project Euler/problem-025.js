/* 
Problem 25: 1000-digit Fibonacci number

The Fibonacci sequence is defined by the recurrence relation:
Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:
F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.
What is the index of the first term in the Fibonacci sequence to contain n digits?
*/

function digitFibonacci(n) {
    let fiboNumbers = [1, 1];
    let minNum = 10 ** (n - 1);

    if (n === 1) return 1;

    for (let i = 0; i < fiboNumbers.length; i++) {
        let nextTerm = fiboNumbers[i] + fiboNumbers[i + 1];
        fiboNumbers.push(nextTerm);

        if (nextTerm / minNum >= 1) return fiboNumbers.length;
    }
}

module.exports = { digitFibonacci };