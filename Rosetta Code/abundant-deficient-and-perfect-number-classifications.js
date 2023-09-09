/* 
Abundant, deficient and perfect number classifications

These define three classifications of positive integers based on their proper divisors.
Let  P(n) be the sum of the proper divisors of n where proper divisors are all positive integers n other than n itself.
If P(n) < n then n is classed as deficient
If P(n) === n then n is classed as perfect
If P(n) > n then n is classed as abundant
Example: 6 has proper divisors of 1, 2, and 3. 1 + 2 + 3 = 6, so 6 is classed as a perfect number.
Implement a function that calculates how many of the integers from 1 to num (inclusive) are in each of the three classes. 
Output the result as an array in the following format [deficient, perfect, abundant].
*/

function getDPA(n) {
    const table = Array(n + 1).fill(1);
    const classifications = Array(3).fill(0);
    table[0] = 0;
    classifications[0] = 1;

    for (let i = 2; i <= n; i++) {
        for (let j = 2; j * i <= n; j++) {
            table[j * i] += i;
        }
    }

    for (let i = 2; i <= n; i++) {
        if (table[i] < i) classifications[0]++;
        else if (table[i] === i) classifications[1]++;
        else classifications[2]++;
    }

    return classifications;
}

module.exports = { getDPA };