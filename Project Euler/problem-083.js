/* 
Problem 83: Path sum: four ways

Note: This problem is a significantly more challenging version of Problem 81.
In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom right, by moving left, right, up, and down, is indicated in bold red and is equal to 2297.
131 673 234 103 18
201 96 342 965 150
630 803 746 422 111
537 699 497 121 956
805 732 524 37 331
Find the minimal path sum from the top left to the bottom right by moving left, right, up, and down in matrix, a 2D array representing a matrix. 
The maximum matrix size used in tests will be 80 by 80.
*/

function pathSumFourWays(matrix) {
    let minSum = Array(matrix.length).fill().map(() => Array(matrix[0].length));
    let needUpdate = true;
    minSum[0][0] = matrix[0][0];

    while (needUpdate) {
        needUpdate = false;

        for (let row = 0; row < matrix.length; row++) {
            for (let column = 0; column < matrix[0].length; column++) {
                needUpdate = updateValue(matrix, minSum, minSum[row][column], row - 1, column) || needUpdate;
                needUpdate = updateValue(matrix, minSum, minSum[row][column], row + 1, column) || needUpdate;
                needUpdate = updateValue(matrix, minSum, minSum[row][column], row, column - 1) || needUpdate;
                needUpdate = updateValue(matrix, minSum, minSum[row][column], row, column + 1) || needUpdate;
            }
        }
    }

    return minSum[minSum.length - 1][minSum[0].length - 1];
}

function updateValue(matrix, sumArr, value, row, column) {
    if (row < 0 || row >= sumArr.length) return;
    if (column < 0 || column >= sumArr[0].length) return;

    let newValue = value + matrix[row][column];

    if (sumArr[row][column] === undefined || sumArr[row][column] > newValue) {
        sumArr[row][column] = newValue;
        return true;
    }

    return false;
}

module.exports = { pathSumFourWays };