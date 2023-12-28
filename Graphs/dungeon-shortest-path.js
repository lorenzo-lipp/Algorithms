function dungeonShortestPath(dungeon) {
    /* 
        Input must be a 2D array, as the example below:
        [
            ["S", ".", ".", "#", ".", ".", "."],
            [".", "#", ".", ".", ".", "#", "."],
            [".", "#", ".", ".", ".", ".", "."],
            [".", ".", "#", "#", ".", ".", "."],
            ["#", ".", "#", "E", ".", "#", "."]
        ]
        Where S = Start, E = End, # = Obstacle, . = Free Path
    */

    let path = new Array(dungeon.length).fill().map(() => Array(dungeon[0].length).fill(null));
    let start;
    let end;

    for (let r = 0; r < dungeon.length; r++) {
        for (let c = 0; c < dungeon[0].length; c++) {
            if (dungeon[r][c] === "S") start = [r, c];
            else if (dungeon[r][c] === "E") end = [r, c];
        }
    }

    const END_OF_LINE = [-1, -1];

    dspAux(...start, END_OF_LINE, dungeon, path);

    let result = [];
    let next = end;

    while (next !== END_OF_LINE && next !== null) {
        result.push(next);
        next = path[next[0]][next[1]];
    }

    if (next === null) return null;
    return result.reverse();
}

function dspAux(row, column, from, dungeon, path, queue = []) {
    if (path[row][column] || dungeon[row][column] === "#") {
        if (queue.length) dspAux(...queue[0], dungeon, path, queue.slice(1));
        return;
    }

    path[row][column] = from;

    let pos = [row, column];
    if (row > 0) queue.push([row - 1, column, pos]);
    if (row + 1 < dungeon.length) queue.push([row + 1, column, pos]);
    if (column > 0) queue.push([row, column - 1, pos]);
    if (column + 1 < dungeon[0].length) queue.push([row, column + 1, pos]);

    if (queue.length) dspAux(...queue[0], dungeon, path, queue.slice(1));
}

module.exports = { dungeonShortestPath };