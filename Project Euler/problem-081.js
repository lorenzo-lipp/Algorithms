/* 
Problem 81: Path sum: two ways

In the 5 by 5 matrix below, the minimal path sum from the top left to the bottom right, by only moving to the right and down, is indicated in bold red and is equal to 2427.
[131]  673  234   103  18 
[201] [96] [342]  965  150
 630   803 [746] [422] 111
 537   699  497  [121] 956
 805   732  524  [37] [331]
Find the minimal path sum from the top left to the bottom right by only moving right and down in matrix, a 2D array representing a matrix. 
*/

function pathSumTwoWays(matrix) {
    let minSum = Array(matrix.length).fill().map(() => Array(matrix[0].length));

    for (let row = 0; row < matrix.length; row++) {
        for (let column = 0; column < matrix.length; column++) {
            if (column > 0) {
                let newSum = minSum[row][column - 1] + matrix[row][column];

                if (minSum[row][column] === undefined || minSum[row][column] > newSum) {
                    minSum[row][column] = newSum;
                }
            }
            if (row > 0) {
                let newSum = minSum[row - 1][column] + matrix[row][column];

                if (minSum[row][column] === undefined || minSum[row][column] > newSum) {
                    minSum[row][column] = newSum;
                }
            }
            if (row === 0 && column === 0) {
                minSum[row][column] = matrix[row][column];
            }
        }
    }

    return minSum[minSum.length - 1][minSum[0].length - 1];
}

module.exports = { pathSumTwoWays };