/* 
Sum of a series

Compute the nth term of a series, i.e. the sum of the n first terms of the corresponding sequence. 
Informally this value, or its limit when n tends to infinity, is also called the sum of the series, thus the title of this task. 
For this task, use:  Sn=∑ k=1 n = 1/k^2.
Write a function that take a and b as parameters and returns the sum of ath to bth members of the sequence.
*/

function sumSeries(a, b) {
    let result = 0;

    for (let k = a; k <= b; k++) result += 1 / k ** 2;

    return result;
}

module.exports = { sumSeries };