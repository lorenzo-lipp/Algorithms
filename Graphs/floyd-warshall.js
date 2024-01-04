function floydWarshallMatrix(matrix) {
    let dist = Array(matrix.length).fill().map(() => Array(matrix.length));
    let next = Array(matrix.length).fill().map(() => Array(matrix.length).fill(null));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            dist[i][j] = matrix[i][j];

            if (dist[i][j] !== Infinity) {
                next[i][j] = j;
            }
        }
    }

    for (let k = 0; k < matrix.length; k++) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                    next[i][j] = next[i][k];
                }
            }
        }
    }

    for (let k = 0; k < matrix.length; k++) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix.length; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = -Infinity;
                    next[i][j] = null;
                }
            }
        }
    }

    return new APSP(dist, next);
}

function floydWarshall(graph) {
    return floydWarshallMatrix(graphToMatrix(graph));
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

class APSP {
    constructor(dist, next) {
        this.dist = dist;
        this.next = next;
    }

    getShortestPath(start, end) {
        let path = [];

        for (let i = start; i !== end; i = this.next[i][end]) {
            if (i === null) return { distance: this.dist[start][end], path: null };
            path.push(i);
        }

        path.push(end);

        if (Math.abs(this.dist[start][end]) === Infinity || this.next[end][end] === null) {
            return { distance: this.dist[start][end], path: null };
        }
        
        return { distance: this.dist[start][end], path };
    }
}

module.exports = { floydWarshall, floydWarshallMatrix };