/* 
Problem 63: Powerful digit counts

The 5-digit number, 16807 = 7^5, is also a fifth power. 
Similarly, the 9-digit number, 134217728 = 8^9, is a ninth power.
Create a function that returns how many positive integers are of length n and an nth power. 
*/

function powerfulDigitCounts(n) {
    let count = 0;

    for (let i = 1; true; i++) {
        let power = i ** n;
        let digits = countDigits(power);

        if (digits > n) return count;
        if (digits === n) count++;
    }
}

function countDigits(num) {
    return Math.floor(Math.log10(num)) + 1;
}

module.exports = { powerfulDigitCounts };