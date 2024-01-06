/* 
Combinations
Given non-negative integers m and n, generate all size m combinations of the integers from 0 (zero) to n-1 in sorted order (each combination is sorted and the entire table is sorted).
Example:
3 comb 5 is:
0 1 2
0 1 3
0 1 4
0 2 3
0 2 4
0 3 4
1 2 3
1 2 4
1 3 4
2 3 4 
*/

function combinations(m, n) {
    return combinationsAux(m, n, 1);
}

function combinationsAux(m, n, iteration) {
    if (iteration === m) return Array(n).fill().map((_, i) => [i]);

    let results = combinationsAux(m, n, iteration + 1);
    let newResults = [];

    for (let result of results) {
        for (let i = result[result.length - 1] + 1; i < n; i++) {
            newResults.push([...result, i]);
        }
    }

    return newResults;
}

module.exports = { combinations };