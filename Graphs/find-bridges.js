function findBridges(graph) {
    let bridges = [];
    let lastId = { val: -1 };
    let ids = Array(graph.length).fill(null);
    let lowLink = Array(graph.length).fill(Infinity);

    findBridgesAux(0, null, lastId, ids, lowLink, graph, bridges);

    return bridges.filter((([from, to]) => lowLink[ids[from]] !== lowLink[ids[to]]));
}

function findBridgesAux(at, from, lastId, ids, lowLink, graph, bridges) {
    if (ids[at] !== null) return;

    ids[at] = ++lastId.val;
    lowLink[at] = lastId.val;

    for (let neighbor of graph[at]) {
        if (from !== neighbor) {
            findBridgesAux(neighbor, at, lastId, ids, lowLink, graph, bridges);
            if (lowLink[neighbor] <= lowLink[at]) {
                lowLink[at] = lowLink[neighbor];
            } else {
                bridges.push([at, neighbor].sort());
            }
        }
    }
}

module.exports = { findBridges };