function longestPath(start, end, graph) {
    let result = Array(graph.length).fill().map(() => [Infinity, null]);
    let visited = Array(graph.length).fill(false);

    result[start][0] = 0;
    lpAux(start, visited, graph, result);

    let path = [];
    let next = end;

    while (next !== null && next !== start) {
        path.push(next);
        next = result[next][1];
    }

    path.push(start);

    if (Math.abs(result[end][0]) === Infinity) return { distance: Infinity, path: null };

    return { distance: Math.abs(result[end][0]), path: path.reverse() };
}

function lpAux(at, visited, graph, result, queue = []) {
    if (visited[at]) {
        if (queue.length) lpAux(queue[0], visited, graph, result, queue.slice(1));
        return;
    }

    visited[at] = true;

    for (let [neighbor, weight] of graph[at]) {
        if (result[neighbor][0] > result[at][0] - weight) {
            result[neighbor][0] = result[at][0] - weight;
            result[neighbor][1] = at;
            queue.push(neighbor);
        }
    }

    if (queue.length) lpAux(queue[0], visited, graph, result, queue.slice(1));
}

module.exports = { longestPath };