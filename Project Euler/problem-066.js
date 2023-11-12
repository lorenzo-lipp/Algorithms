/* 
Problem 66: Diophantine equation

Consider quadratic Diophantine equations of the form:
x^2 – D * y^2 = 1
For example, when D=13, the minimal solution in x is 649^2 – 13 * 180^2 = 1.
It can be assumed that there are no solutions in positive integers when D is square.
By finding minimal solutions in x for D = {2, 3, 5, 6, 7}, we obtain the following:
3^2 – 2 * 2^2 = 1
2^2 – 3 * 1^2 = 1
9^2 – 5 * 4^2 = 1
5^2 – 6 * 2^2 = 1
8^2 – 7 * 3^2 = 1
Hence, by considering minimal solutions in x for D ≤ 7, the largest x is obtained when D=5.
Find the value of D ≤ n in minimal solutions of x for which the largest value of x is obtained.
*/

function diophantineEquation(n) {
    let largestX = null;
    let dOfLargestX = null; 

    for (let d = n; d > 0; d--) {
        if (Number.isInteger(Math.sqrt(d))) continue;

        for (let periodSize = 1; true; periodSize++) {
            let [x, y] = convergents(d, periodSize);

            if (x * x - BigInt(d) * y * y === 1n) {
                if (x > largestX) {
                    largestX = x;
                    dOfLargestX = d;
                }
                break;
            }
        }
    }

    return dOfLargestX;
}

function convergents(n, maxPeriod) {
    let period = getPeriod(n, maxPeriod);
    let numerator = BigInt(period[period.length - 1]);
    let denominator = BigInt(1);

    for (let i = period.length - 2; i > -1; i--) {
        [numerator, denominator] = [denominator, numerator];
        numerator += denominator * BigInt(period[i]);
    }

    return [numerator, denominator];
}

function getPeriod(n, maxPeriod) {
    const root = Math.sqrt(n);
    const a = [Math.floor(root)];
    let index = 0;
    let numerator = 0;
    let denominator = 1;
    let period = 0;

    if (root - a[0]=== 0) return 0;

    do {
        numerator = a[index] * denominator - numerator;
        denominator = Math.floor((n - numerator ** 2) / denominator);
        a[++index] = Math.floor((root + numerator) / denominator);
        period++;
    } while (period !== maxPeriod);

    return a;
}

module.exports = { diophantineEquation };