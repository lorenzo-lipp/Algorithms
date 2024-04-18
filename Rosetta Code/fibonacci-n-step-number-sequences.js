/* 
Fibonacci n-step number sequences

These number series are an expansion of the ordinary Fibonacci sequence where:
For n=2 we have the Fibonacci sequence; 
with initial values [1,1] and F2k=F2k−1+F2k−2
For n=3 we have the tribonacci sequence; with initial values [1,1,2] and F3k=F3k−1+F3k−2+F3k−3
For n=4 we have the tetranacci sequence; 
with initial values [1,1,2,4] and F4k=F4k−1+F4k−2+F4k−3+F4k−4...
For general n>2 we have the Fibonacci n-step sequence Fnk; 
with initial values of the first n values of the (n−1)'th Fibonacci n-step sequence Fn−1k;
and k'th value of this n'th sequence being Fnk=∑(n)i=1F(n)k−i
For small values of n, Greek numeric prefixes are sometimes used to individually name each series.
Fibonacci n-step sequences:
n   Series name	Values
2	fibonacci	1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 ...
3	tribonacci	1 1 2 4 7 13 24 44 81 149 274 504 927 1705 3136 ...
4	tetranacci	1 1 2 4 8 15 29 56 108 208 401 773 1490 2872 5536 ...
5	pentanacci	1 1 2 4 8 16 31 61 120 236 464 912 1793 3525 6930 ...
6	hexanacci	1 1 2 4 8 16 32 63 125 248 492 976 1936 3840 7617 ...
7	heptanacci	1 1 2 4 8 16 32 64 127 253 504 1004 2000 3984 7936 ...
8	octonacci	1 1 2 4 8 16 32 64 128 255 509 1016 2028 4048 8080 ...
9	nonanacci	1 1 2 4 8 16 32 64 128 256 511 1021 2040 4076 8144 ...
10	decanacci	1 1 2 4 8 16 32 64 128 256 512 1023 2045 4088 8172 ...
Allied sequences can be generated where the initial values are changed: 
The Lucas series sums the two preceding values like the fibonacci series for n=2 but uses [2,1] as its initial values.
Write a function to generate Fibonacci n-step number sequences and Lucas sequences. 
The first parameter will be n. 
The second parameter will be the number of elements to be returned. 
The third parameter will specify whether to output the Fibonacci sequence or the Lucas sequence. 
If the parameter is "f" then return the Fibonacci sequence and if it is "l", then return the Lucas sequence. 
The sequences must be returned as an array.
*/

function fib_luc(n, len, type) {
    switch (type) {
        case "f":
            return fibonacci(n, len);
        case "l":
            return lucas(n, len);
    }
}

function fibonacci(n, terms) {
    let sequence = [1, 1];

    while (sequence.length < terms) {
        let nextTerm = 0;

        for (let i = sequence.length - 1; i >= 0 && i >= sequence.length - n; i--) {
            nextTerm += sequence[i];
        }

        sequence.push(nextTerm);
    }

    return sequence;
}

function lucas(n, terms) {
    let sequence = [2, 1];

    while (sequence.length < terms) {
        let nextTerm = 0;

        for (let i = sequence.length - 1; i >= 0 && i >= sequence.length - n; i--) {
            nextTerm += sequence[i];
        }

        sequence.push(nextTerm);
    }

    return sequence;
}

module.exports = { fib_luc };