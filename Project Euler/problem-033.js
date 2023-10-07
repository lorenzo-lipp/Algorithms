/* 
Problem 33: Digit cancelling fractions

The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling the 9s.
We shall consider fractions like, 30/50 = 3/5, to be trivial examples.
There are exactly four non-trivial examples of this type of fraction, less than one in value, and containing two digits in the numerator and denominator.
If the product of these four fractions is given in its lowest common terms, find the value of the denominator.
*/

function digitCancellingFractions() {
    let digits = Array(9).fill().map((_, i) => i + 1);
    let finalNumerator = 1;
    let finalDenominator = 1;

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (i === j) continue;

            let numerator = digits[i] * 10 + digits[j];

            for (let k = 0; k < 9; k++) {
                let denominator = digits[j] * 10 + digits[k];
                let result = numerator / denominator;

                if (result === digits[i] / digits[k]) {
                    finalNumerator *= digits[i];
                    finalDenominator *= digits[k];
                }
            }
        }
    }

    return finalDenominator / maxCommonMultiple(finalNumerator, finalDenominator);
}

function maxCommonMultiple(a, b) {
    let mcm = 1;

    for (let multiple = 2; multiple <= a;) {
        if (a % multiple === 0 && b % multiple === 0) {
            a /= multiple;
            b /= multiple;
            mcm *= multiple;
        } else {
            multiple++;
        }
    }

    return mcm
}

module.exports = { digitCancellingFractions };