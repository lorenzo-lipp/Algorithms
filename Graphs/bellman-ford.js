function bellmanFord(start, graph) {
    let dist = Array(graph.length).fill(Infinity);
    dist[start] = 0;

    for (let i = 0; i < graph.length; i++) {
        for (let nodeFrom = 0; nodeFrom < graph.length; nodeFrom++) {
            for (let [nodeTo, weight] of graph[nodeFrom]) {
                if (dist[nodeFrom] + weight < dist[nodeTo]) {
                    dist[nodeTo] = dist[nodeFrom] + weight;
                }
            }
        }
    }

    for (let i = 0; i < graph.length; i++) {
        for (let nodeFrom = 0; nodeFrom < graph.length; nodeFrom++) {
            for (let [nodeTo, weight] of graph[nodeFrom]) {
                if (dist[nodeFrom] + weight < dist[nodeTo]) {
                    dist[nodeTo] = -Infinity;
                }
            }
        }
    }

    return dist;
}

module.exports = { bellmanFord };
