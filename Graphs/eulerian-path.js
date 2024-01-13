function eulerianPath(graph) {
    let edges = Array(graph.length).fill().map(() => []);
    let outgoingEdges = Array(graph.length).fill(0);
    let path = [];

    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            let to = graph[i][j];

            edges[i].push(new Edge(i, to));
            outgoingEdges[i]++;
        }
    }

    let start = outgoingEdges.findIndex(v => v > 0);

    if (start === -1) return null;

    depthFirstSearch(start, edges, outgoingEdges, path);

    if (outgoingEdges.find(v => v > 0)) return null;
    return path.reverse();
}

function depthFirstSearch(node, edges, outgoingEdges, result) {
    if (outgoingEdges[node] !== 0) {
        for (let edge of edges[node]) {
            if (!edge.visited) {
                edge.visited = true;
                depthFirstSearch(edge.to, edges, outgoingEdges, result);
                outgoingEdges[node]--;
            }
        }
    }

    result.push(node);
}

class Edge {
    constructor(from, to) {
        this.from = from;
        this.to = to;
        this.visited = false;
    }
}

module.exports = { eulerianPath };