/* 
Problem 48: Self powers

The series, 11 + 22 + 33 + ... + 1010 = 10405071317.
Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.
*/

function selfPowers(power, lastDigits) {
    let sum = 0;

    for (let i = power; i >= 1; i--) {
        sum += getPower(i, lastDigits);
        sum = truncate(sum, lastDigits);
    }

    return sum;
}

function getPower(num, precision) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= num;
        result = truncate(result, precision);
    }

    return result;
}

function truncate(num, precision) {
    let digits = Math.floor(Math.log10(num)) + 1;

    if (digits <= precision) return num;
    else return num % 10 ** precision;
}

module.exports = { selfPowers };