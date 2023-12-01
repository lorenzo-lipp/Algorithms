/* 
Problem 82: Path sum: three ways

Note: This problem is a more challenging version of Problem 81.
The minimal path sum in the 5 by 5 matrix below, by starting in any cell in the left column and finishing in any cell in the right column, and only moving up, down, and right, is indicated in red and bold; the sum is equal to 994.
131 673 234 103 18
201 96 342 965 150
630 803 746 422 111
537 699 497 121 956
805 732 524 37 331
Find the minimal path sum from the left column to the right column in matrix, a 2D array representing a matrix. The maximum matrix size used in tests will be 80 by 80.
*/

function pathSumThreeWays(matrix) {
    let minSum = Array(matrix.length).fill().map(() => Array(matrix[0].length));

    for (let column = 0; column < matrix[0].length; column++) {
        for (let row = 0; row < matrix.length; row++) {
            if (column === 0) {
                minSum[row][column] = matrix[row][column];
            } else {
                minSum[row][column] = minSum[row][column - 1] + matrix[row][column];
            }
        }

        for (let row = 1; row < matrix.length; row++) {
            minSum[row][column] = Math.min(minSum[row][column], minSum[row - 1][column] + matrix[row][column]);
        }

        for (let row = matrix.length - 2; row > -1; row--) {
            minSum[row][column] = Math.min(minSum[row][column], minSum[row + 1][column] + matrix[row][column]);
        }
    }

    let minValue = Infinity;

    for (let row = 0; row < matrix.length; row++) {
        minValue = Math.min(minValue, minSum[row][matrix[0].length - 1]);
    }

    return minValue;
}

module.exports = { pathSumThreeWays };