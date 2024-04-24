/* 
Least common multiple

The least common multiple of 12 and 18 is 36, because 12 is a factor (12 × 3 = 36), and 18 is a factor (18 × 2 = 36), and there is no positive integer less than 36 that has both factors. 
As a special case, if either m or n is zero, then the least common multiple is zero. 
One way to calculate the least common multiple is to iterate all the multiples of m, until you find one that is also a multiple of n. 
If you already have gcd for greatest common divisor, then this formula calculates lcm.
lcm(m,n)=|m×n|/gcd(m,n)
Compute the least common multiple of an array of integers.
Given m and n, the least common multiple is the smallest positive integer that has both m and n as factors.
*/

function lcm(arr) {
    let m = Math.abs(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        let n = Math.abs(arr[i]);

        m = m * n / gcd(m, n);
    }

    return m;
}

function gcd(a, b) {
    while (b > 0) {
        [a, b] = [b, a];
        b = b % a;
    }

    return a;
}

module.exports = { lcm };