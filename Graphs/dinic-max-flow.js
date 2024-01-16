function dinic(start, end, graph) {
    let edges = Array(graph.length).fill().map(() => []);
    let maxFlow = 0;

    for (let i = 0; i < graph.length; i++) {
        for (let j = 0; j < graph[i].length; j++) {
            let [node, maxFlow] = graph[i][j];
            let edge = new Edge(i, node, maxFlow);

            edges[i].push(edge);
            edges[node].push(edge.residual);
        }
    }

    let levelGraph = getLevelGraph(start, end, edges);

    while (levelGraph) {
        let bottleneck = 0;
        let oldMaxFlow = maxFlow;

        while (bottleneck !== Infinity) {
            maxFlow += bottleneck;
            bottleneck = depthFirstSearch(start, end, levelGraph);
        }

        if (oldMaxFlow !== maxFlow) levelGraph = getLevelGraph(start, end, edges);
        else levelGraph = null;
    }
    

    return { maxFlow, edges: edges.map(v => v.filter(e => e.capacity > 0)) };
}

function getLevelGraph(start, end, edges) {
    let visited = Array(edges.length).fill(false);
    let result = Array(edges.length).fill().map(() => []);

    getLevelGraphAux(start, end, visited, edges, result);

    if (result.every(v => v.length === 0)) return null;

    return result;
} 

function getLevelGraphAux(at, end, visited, edges, result, queue = [], edge = null) {
    let skip = visited[at];

    visited[at] = true;

    if (at !== end && !skip) {
        for (let edge of edges[at]) {
            if (!visited[edge.to] && edge.bottleneck > 0) queue.push(edge);
        }
    }

    if (edge !== null && (at === end || result.length > 0)) result[edge.from].push(edge);

    if (queue.length) getLevelGraphAux(queue[0].to, end, visited, edges, result, queue.slice(1), queue[0]);
}

function depthFirstSearch(start, end, graph) {
    let visited = Array(graph.length).fill(false);
    let result = [];

    dfsAux(start, end, visited, graph, result);

    let bottleneck = result.reduce((a, b) => Math.min(a, b.bottleneck), Infinity);

    result.forEach(v => v.augment(bottleneck));

    return bottleneck;
}

function dfsAux(at, end, visited, graph, result, edge = null) {
    if (visited[at]) return;

    visited[at] = true;

    if (at !== end) {
        for (let edge of graph[at]) {
            if (edge.bottleneck !== 0 && result.length === 0) {
                dfsAux(edge.to, end, visited, graph, result, edge);
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

module.exports = { dinic };