/* 
Problem 73: Counting fractions in a range

Consider the fraction, n/d, where n and d are positive integers. 
If n < d and highest common factor, HCF(n,d)=1, it is called a reduced proper fraction.
If we list the set of reduced proper fractions for d ≤ 8 in ascending order of size, we get:
1/8,1/7,1/6,1/5,1/4,2/7,1/3,3/8,2/5,3/7,1/2,4/7,3/5,5/8,2/3,5/7,3/4,4/5,5/6,6/7,7/8
 
It can be seen that there are 3 fractions between 1/3 and 1/2.
How many fractions lie between 1/3 and 1/2 in the sorted set of reduced proper fractions for d ≤ limit?
*/

function countingFractionsInARange(limit) {
    let min = 1 / 3;
    let max = 1 / 2;
    let acc = 0;

    for (let d = limit; d > 3; d--) {
        let start = d * min;
        let end = d * max;
        let diff = 0;

        for (let n = Math.ceil(start); n < end; n++) {
            if (canReduce(n, d)) continue;
            diff++;
        }

        acc += diff;
    }

    return acc;
}

function canReduce(a, b) {
    return hcf(a, b) !== 1;
}

function hcf(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
  
    return a;
}

module.exports = { countingFractionsInARange };