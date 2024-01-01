function topologicalSort(graph) {
    let result = [];
    let visited = Array(graph.length).fill(false);

    for (let node = 0; node < graph.length; node++) {
        depthFirstSearch(node, visited, graph, result);
    }

    return result.reverse();
}

function depthFirstSearch(at, visited, graph, result) {
    if (visited[at]) return;

    visited[at] = true;

    for (let neighbor of graph[at]) 
        depthFirstSearch(neighbor, visited, graph, result);

    result.push(at);
}

module.exports = { topologicalSort };