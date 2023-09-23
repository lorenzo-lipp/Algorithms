/* 
Problem 26: Reciprocal cycles

A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with denominators 2 to 10 are given:
1/2 = 0.5
1/3 = 0.(3)
1/4 = 0.25
1/5 = 0.2
1/6 = 0.1(6)
1/7 = 0.(142857)
1/8 = 0.125
1/9 = 0.(1)
1/10 = 0.1
Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a 6-digit recurring cycle.
Find the value of d < n for which 1/d contains the longest recurring cycle in its decimal fraction part.
*/

function reciprocalCycles(n) {
    let longestCycleLen = null;
    let longestCycleNum = null;

    for (let i = 2; i < n; i++) {
        let newNum = removeNonRecurringDivisors(i);
        if (newNum !== 1) {
            let undivisiblePart = 10;
            let exponent = 1;

            while(true) {
                let remainder = undivisiblePart % newNum;
                
                if (remainder === 1) {
                    if (longestCycleLen === null || longestCycleLen < exponent) {
                        longestCycleLen = exponent;
                        longestCycleNum = i;
                    }
                    break;
                }
                undivisiblePart = remainder * 10;
                exponent++;
            }
        }
    }

    return longestCycleNum;
}

function removeNonRecurringDivisors(num) {
    while (num !== 1) {
        if (num % 2 === 0) {
            num /= 2;
        } else if (num % 5 === 0) {
            num /= 5;
        } else {
            return num;
        }
    }

    return 1;
}

module.exports = { reciprocalCycles };