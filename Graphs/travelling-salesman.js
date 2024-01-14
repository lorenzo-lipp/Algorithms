function travel(matrix) {
    let maxSize = 2 ** matrix.length;
    let valuesToUpdate = Array(matrix.length).fill().map(() => []);
    let size = 1;

    for (let i = 1; i < matrix.length; i++) valuesToUpdate[size - 1].push([i, 1 | 1 << i, matrix[0][i], -1]);
    
    while (valuesToUpdate[size - 1][0][1] < maxSize - 1) {
        for (let index = 0; index < valuesToUpdate[size - 1].length; index++) {
            let [i, state, acc] = valuesToUpdate[size - 1][index];
            for (let j = 0; j < matrix.length; j++) {
                let shift = 1 << j;

                if (!(state & shift) && acc + matrix[i][j] !== Infinity) {
                    valuesToUpdate[size].push([j, state | shift, acc + matrix[i][j], index]);
                }
            }
        }

        size++;
    }

    let distance = Infinity;
    let last = null;
    let from = null;

    for (let [i, state, acc, index] of valuesToUpdate[size - 1]) {
        if (distance > acc + matrix[i][0]) {
            distance = acc + matrix[i][0];
            last = i;
            from = index;
        }
    }

    let path = [0, last];

    while (size-- > 1) {
        let [i, state, acc, index] = valuesToUpdate[size - 1][from];

        path.push(i);
        from = index;
    }

    path.push(0);

    return { distance, path: path.reverse() };
}

function travellingSalesman(graph) {
    return travel(graphToMatrix(graph));
}

function graphToMatrix(graph) {
    let matrix = Array(graph.length).fill().map(() => Array(graph.length));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            let [node, weight] = graph[i].find(([node]) => node === j) || [null, null];

            if (i === j) matrix[i][j] = 0;
            else if (node !== null) matrix[i][j] = weight;
            else matrix[i][j] = Infinity;
        }
    }

    return matrix;
}

module.exports = { travellingSalesman };