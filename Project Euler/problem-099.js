/* 
Problem 99: Largest exponential

Comparing two numbers written in index form like 2^11 and 3^7 is not difficult, as any calculator would confirm that 2^11=2048<3^7=2187.
However, confirming that 632382^518061<519432^525806 would be much more difficult, as both numbers contain over three million digits.
Using the 2D baseExp array of base/exponent pairs, determine pair with the greatest numerical value and return it.
*/

function largestExponential(baseExp) {
    let largest = baseExp[0];

    for (let i = 1; i < baseExp.length; i++) {
        let [base, exp] = baseExp[i];
        let [largestBase, largestExp] = largest;

        if (Math.pow(base, exp / largestExp) > largestBase) {
            largest = baseExp[i];
        }
    }

    return largest;
}

module.exports = { largestExponential };