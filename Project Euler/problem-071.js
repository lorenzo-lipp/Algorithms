/* 
Problem 71: Ordered fractions

Consider the fraction, n/d, where n and d are positive integers. 
If n < d and highest common factor, HCF(n,d)=1, it is called a reduced proper fraction.
If we list the set of reduced proper fractions for d ≤ 8 in ascending order of size, we get:
1/8,1/7,1/6,1/5,1/4,2/7,1/3,3/8,2/5,3/7,1/2,4/7,3/5,5/8,2/3,5/7,3/4,4/5,5/6,6/7,7/8 
It can be seen that 2/5 is the fraction immediately to the left of 3/7.
By listing the set of reduced proper fractions for d ≤ limit in ascending order of size, find the numerator of the fraction immediately to the left of 3/7 .
*/

function orderedFractions(limit) {
    let target = 3 / 7;
    let minDiff = Infinity;
    let numerator = null;

    for (let d = limit; d > 0; d--) {
        if (d === 7) continue;

        let n = Math.floor(d * target);
        let result = n / d;
        let diff = target - result;

        if (result < target && diff <= minDiff) {
            numerator = n;
            minDiff = diff;
        }
    }

    return numerator;
}

module.exports = { orderedFractions };