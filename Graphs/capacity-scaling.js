function capacityScaling(start, end, graph) {
    let edges = Array(graph.length).fill().map(() => []);
    let maxFlow = 0;
    let u = 0;

    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            let [node, maxFlow] = graph[i][j];
            let edge = new Edge(i, node, maxFlow);

            u = Math.max(u, maxFlow);
            edges[i].push(edge);
            edges[node].push(edge.residual);
        }
    }

    u = 2 ** Math.floor(Math.log2(u));

    while (u >= 1) {
        let bottleneck = 0;

        while (bottleneck !== Infinity) {
            maxFlow += bottleneck;
            bottleneck = depthFirstSearch(start, end, edges, u);
        }

        u /= 2;
    }

    return { maxFlow, edges: edges.map(v => v.filter(e => e.capacity > 0)) };
}

function depthFirstSearch(start, end, graph, u) {
    let visited = Array(graph.length).fill(false);
    let result = [];

    dfsAux(start, end, visited, graph, result, u);

    let bottleneck = result.reduce((a, b) => Math.min(a, b.bottleneck), Infinity);

    result.forEach(v => v.augment(bottleneck));

    return bottleneck;
}

function dfsAux(at, end, visited, graph, result, u, edge = null) {
    if (visited[at]) return;

    visited[at] = true;

    if (at !== end) {
        for (let edge of graph[at]) {
            if (edge.bottleneck >= u && result.length === 0) {
                dfsAux(edge.to, end, visited, graph, result, u, edge);
            }
        }
    }
    
    if (edge !== null && (result.length > 0 || at === end)) result.push(edge);
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

module.exports = { capacityScaling };