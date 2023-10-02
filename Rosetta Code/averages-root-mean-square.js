/* 
Averages/Root mean square

Compute the Root Mean Square (RMS) of the numbers 1 through 10 inclusive.
*/

function rms(arr) {
    return Math.sqrt(arr.reduce((a, b) => a + b ** 2, 0) / arr.length);
}

module.exports = { rms };