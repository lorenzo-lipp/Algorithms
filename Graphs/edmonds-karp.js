function edmondsKarp(start, end, graph) {
    let edges = Array(graph.length).fill().map(() => []);
    let bottleneck = 0;
    let maxFlow = 0;

    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            let [node, maxFlow] = graph[i][j];
            let edge = new Edge(i, node, maxFlow);

            edges[i].push(edge);
            edges[node].push(edge.residual);
        }
    }

    while (bottleneck !== Infinity) {
        maxFlow += bottleneck;
        bottleneck = breadthFirstSearch(start, end, edges);
    }

    return { maxFlow, edges: edges.map(v => v.filter(e => e.capacity > 0)) };
}

function breadthFirstSearch(start, end, graph) {
    let visited = Array(graph.length).fill(false);
    let result = [];

    bfsAux(start, end, visited, graph, result);

    let bottleneck = result.reduce((a, b) => Math.min(a, b.bottleneck), Infinity);

    result.forEach(v => v.augment(bottleneck));

    return bottleneck;
}

function bfsAux(at, end, visited, graph, result, queue = [], edge = null) {
    if (visited[at]) {
        if (queue.length) bfsAux(queue[0].to, end, visited, graph, result, queue.slice(1), queue[0]);
        return;
    }

    visited[at] = true;

    if (at !== end) {
        for (let edge of graph[at]) {
            if (!visited[edge.to] && edge.bottleneck > 0) queue.push(edge);
        }

        if (queue.length) bfsAux(queue[0].to, end, visited, graph, result, queue.slice(1), queue[0]);
    }

    if (edge !== null && 
        ((result.length > 0 && result[result.length - 1].from === at) || at === end)
    ) result.push(edge);
}

class Edge {
    constructor(from, to, capacity, residual = null) {
        this.from = from;
        this.to = to;
        this.flow = 0;
        this.capacity = capacity;

        if (!residual) this.residual = new Edge(to, from, 0, this);
        else this.residual = residual;
    }

    augment(val) {
        this.flow += val;
        this.residual.flow -= val;
    }

    get bottleneck() { return this.capacity - this.flow; }
}

module.exports = { edmondsKarp };