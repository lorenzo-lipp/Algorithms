/* 
Averages/Pythagorean means

Compute all three of the Pythagorean means of the set of integers 1 through 10 (inclusive).
Show that A(x1,…,xn) ≥ G(x1,…,xn) ≥ H(x1,…,xn) for this set of positive integers.
A is the arithmetic mean.
G is the geometric mean.
H is the harmonic mean.
When writing your function, assume the input is an ordered array of all-inclusive numbers.
For the answer, please output an object in the following format:
{
  values: {
    Arithmetic: 5.5,
    Geometric: 4.528728688116765,
    Harmonic: 3.414171521474055
  },
  test: 'is A >= G >= H ? yes'
}
*/

function pythagoreanMeans(rangeArr) {
    let A = arithmeticMean(rangeArr);
    let G = geometricMean(rangeArr);
    let H = harmonicMean(rangeArr);

    return {
        values: {
            Arithmetic: A,
            Geometric: G,
            Harmonic: H
        },
        test: `is A >= G >= H ? ${A >= G && G >= H ? "yes" : "no"}`
    };
}

function arithmeticMean(arr) {
    return arr.reduce((a, b) => a + b, 0) / arr.length;
}

function geometricMean(arr) {
    return Math.pow(arr.reduce((a, b) => a * b, 1), 1 / arr.length);
}

function harmonicMean(arr) {
    return arr.length / arr.reduce((a, b) => a + 1 / b, 0);
}

module.exports = { pythagoreanMeans };