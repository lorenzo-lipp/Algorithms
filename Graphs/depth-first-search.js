function depthFirstSearch(start, graph) {
    let visited = Array(graph.length).fill(false);
    let result = [];

    dfsAux(start, visited, graph, result);

    return result;
}

function dfsAux(at, visited, graph, result) {
    if (visited[at]) return;

    visited[at] = true;

    for (let neighbor of graph[at]) 
        dfsAux(neighbor, visited, graph, result);

    result.push(at);
}

module.exports = { depthFirstSearch };