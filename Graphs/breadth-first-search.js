function breadthFirstSearch(start, graph) {
    let visited = Array(graph.length).fill(false);
    let result = [];

    bfsAux(start, visited, graph, result);

    return result;
}

function bfsAux(at, visited, graph, result, queue = []) {
    if (visited[at]) {
        if (queue.length) bfsAux(queue[0], visited, graph, result, queue.slice(1));
        return;
    }


    visited[at] = true;

    for (let neighbor of graph[at]) {
        if (!visited[neighbor]) queue.push(neighbor);
    }

    result.push(at);

    if (queue.length) bfsAux(queue[0], visited, graph, result, queue.slice(1));
}

module.exports = { breadthFirstSearch };