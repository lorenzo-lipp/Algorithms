function tarjanScc(graph) {
    let stack = Array(graph.length).fill(false);
    let lowLink = Array(graph.length).fill(null);
    let ids = { last: -1 };


    for (let i = 0; i < graph.length; i++) {
        tarjanAux(i, graph, lowLink, stack, ids);
        stack[i] = false;
    }

    let components = Array(graph.length).fill(null);

    for (let i = 0; i < lowLink.length; i++) {
        if (components[lowLink[i]] !== null) components[lowLink[i]].push(i);
        else components[lowLink[i]] = [i];
    }

    return components.filter(v => v !== null);
}

function tarjanAux(node, graph, lowLink, stack, ids) {
    if (lowLink[node] !== null) return;

    ids.last++;
    lowLink[node] = ids.last;
    stack[node] = true;

    for (let adjacentNode of graph[node]) {
        tarjanAux(adjacentNode, graph, lowLink, stack, ids);

        if (stack[adjacentNode]) {
            lowLink[node] = Math.min(lowLink[node], lowLink[adjacentNode]);
            stack[adjacentNode] = false;
        }
    }
}

module.exports = { tarjanScc };