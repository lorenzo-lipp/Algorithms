/* 
Problem 67: Maximum path sum II

By starting at the top of the triangle below and moving to adjacent numbers on the row below, the maximum total from top to bottom is 23.
[3]
[7] 4
2  [4]  6
8   5  [9]  3
That is, 3 + 7 + 4 + 9 = 23.

Find the maximum total from top to bottom in numTriangle, a 2D array defined in the background containing a triangle with one-hundred rows.

Note: This is a much more difficult version of Problem 18. It is not possible to try every route to solve this problem, as there are 299 altogether! If you could check one trillion (1012) routes every second it would take over twenty billion years to check them all. There is an efficient algorithm to solve it. ;o)
*/

function maximumPathSumII(triangle) {
    let rowAccumulator = Array(triangle[0].length).fill(0);
    let nextRowAccumulator = null;

    for (let i = 0; i < triangle.length; i++) {
        let row = triangle[i];
        nextRowAccumulator = Array(row.length).fill(0);

        for (let j = 0; j < row.length; j++) {
            let node = row[j];
            if (node === 0) break;

            nextRowAccumulator[j] = Math.max(nextRowAccumulator[j], rowAccumulator[j] + node);
            if (j + 1 < row.length) {
                nextRowAccumulator[j + 1] = Math.max(nextRowAccumulator[j + 1], rowAccumulator[j] + node);
            }  
        }

        rowAccumulator = nextRowAccumulator;
    }

    return Math.max(...rowAccumulator);
}

module.exports = { maximumPathSumII };