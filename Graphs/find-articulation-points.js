function findArticulation(graph) {
    let bridges = [];
    let lastId = { val: -1 };
    let ids = Array(graph.length).fill(null);
    let lowLink = Array(graph.length).fill(Infinity);

    findBridgesAux(0, null, lastId, ids, lowLink, graph, bridges);

    bridges = bridges.filter((([from, to]) => lowLink[ids[from]] !== lowLink[ids[to]]));

    let points = new Set();

    for (let bridge of bridges) {
        let [from, to] = bridge;

        if (graph[from].find(v => v !== to) !== undefined) points.add(from);
        if (graph[to].find(v => v !== from) !== undefined) points.add(to);
    }

    return [...points];
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

module.exports = { findArticulation };