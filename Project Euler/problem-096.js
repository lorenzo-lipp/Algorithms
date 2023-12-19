/* 
Problem 96: Su Doku
Su Doku (Japanese meaning number place) is the name given to a popular puzzle concept. Its origin is unclear, but credit must be attributed to Leonhard Euler who invented a similar, and much more difficult, puzzle idea called Latin Squares. The objective of Su Doku puzzles, however, is to replace the blanks (or zeros) in a 9 by 9 grid in such that each row, column, and 3 by 3 box contains each of the digits 1 to 9. 
Below is an example of a typical starting puzzle grid and its solution grid.

0 0 3   0 2 0   6 0 0       4 8 3   9 2 1   6 5 7
9 0 0   3 0 5   0 0 1       9 6 7   3 4 5   8 2 1
0 0 1   8 0 6   4 0 0       2 5 1   8 7 6   4 9 3

0 0 8   1 0 2   9 0 0       5 4 8   1 3 2   9 7 6
7 0 0   0 0 0   0 0 8       7 2 9   5 6 4   1 3 8
0 0 6   7 0 8   2 0 0       1 3 6   7 9 8   2 4 5

0 0 2   6 0 9   5 0 0       3 7 2   6 8 9   5 1 4
8 0 0   2 0 3   0 0 9       8 1 4   2 5 3   7 6 9
0 0 5	0 1 0   3 0 0       6 9 5   4 1 7   3 8 2

A well constructed Su Doku puzzle has a unique solution and can be solved by logic, although it may be necessary to employ "guess and test" methods in order to eliminate options (there is much contested opinion over this). 
The complexity of the search determines the difficulty of the puzzle; the example above is considered easy because it can be solved by straight forward direct deduction.
The puzzlesArr array contains different Su Doku puzzle strings ranging in difficulty, but all with unique solutions.
By solving all puzzles in puzzlesArr, find the sum of the 3-digit numbers found in the top left corner of each solution grid; for example, 483 is the 3-digit number found in the top left corner of the solution grid above.
*/

function suDoku(puzzlesArr) {
    let acc = 0;

    for (let sudoku of puzzlesArr) {
        let solution = sudokuSolve(sudoku);

        acc += (+solution.slice(0, 3));
    }

    return acc;
}

function sudokuSolve(sudokuStr) {
    if (sudokuStr.indexOf("0") === -1) return sudokuStr;

    let initialState = sudokuStr;
    let possibilities = Array(81).fill(null);

    for (let i = 0; i < 81; i++) {
        if (sudokuStr[i] !== "0") continue;

        possibilities[i] = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);

        let row = getAllRowNumbers(sudokuStr, i);
        let column = getAllColumnNumbers(sudokuStr, i);
        let area = getAllAreaNumbers(sudokuStr, i);

        for (let number of row) possibilities[i].delete(number);
        for (let number of column) possibilities[i].delete(number);
        for (let number of area) possibilities[i].delete(number);

        if (possibilities[i].size === 1) { 
            for (let n of possibilities[i]) sudokuStr = strReplace(sudokuStr, i, n); // get only element in set
        } else if (possibilities[i].size === 0) {
            return null;
        }
    }

    if (sudokuStr !== initialState) return sudokuSolve(sudokuStr);

    // else guess
    let minSize = 10;
    possibilities.forEach(set => {
        if (set !== null) minSize = Math.min(minSize, set.size);
    });
    let minSetIndex = possibilities.findIndex(set => set !== null && set.size === minSize);

    for (let n of possibilities[minSetIndex]) {
        let solution = sudokuSolve(strReplace(sudokuStr, minSetIndex, n));

        if (solution !== null) return solution;
    }

    return null;
}

function strReplace(str, i, val) {
    return str.substring(0, i) + val + str.substring(i + 1);
}

function getAllAreaNumbers(sudokuStr, i) {
    let column = i % 9;
    let row = Math.floor(i / 9);

    if (column < 3 && row < 3) {
        return sudokuStr.substring(0, 3) + sudokuStr.substring(9, 12) + sudokuStr.substring(18, 21);
    } else if (column < 6 && row < 3) {
        return sudokuStr.substring(3, 6) + sudokuStr.substring(12, 15) + sudokuStr.substring(21, 24);
    } else if (column < 9 && row < 3) {
        return sudokuStr.substring(6, 9) + sudokuStr.substring(15, 18) + sudokuStr.substring(24, 27);
    } else if (column < 3 && row < 6) {
        return sudokuStr.substring(27, 30) + sudokuStr.substring(36, 39) + sudokuStr.substring(45, 48);
    } else if (column < 6 && row < 6) {
        return sudokuStr.substring(30, 33) + sudokuStr.substring(39, 42) + sudokuStr.substring(48, 51);
    } else if (column < 9 && row < 6) {
        return sudokuStr.substring(33, 36) + sudokuStr.substring(42, 45) + sudokuStr.substring(51, 54);
    } else if (column < 3 && row < 9) {
        return sudokuStr.substring(54, 57) + sudokuStr.substring(63, 66) + sudokuStr.substring(72, 75);
    } else if (column < 6 && row < 9) {
        return sudokuStr.substring(57, 60) + sudokuStr.substring(66, 69) + sudokuStr.substring(75, 78);
    } else if (column < 9 && row < 9) {
        return sudokuStr.substring(60, 63) + sudokuStr.substring(69, 72) + sudokuStr.substring(78, 81);
    }
}

function getAllRowNumbers(sudokuStr, i) {
    let start = Math.floor(i / 9) * 9;

    return sudokuStr.slice(start, start + 9);
}

function getAllColumnNumbers(sudokuStr, i) {
    let column = i % 9;

    return sudokuStr[column] + 
           sudokuStr[column + 9] + 
           sudokuStr[column + 18] + 
           sudokuStr[column + 27] +
           sudokuStr[column + 36] +
           sudokuStr[column + 45] +
           sudokuStr[column + 54] +
           sudokuStr[column + 63] +
           sudokuStr[column + 72];
}

module.exports = { suDoku };