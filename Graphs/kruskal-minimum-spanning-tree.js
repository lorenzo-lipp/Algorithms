function mst(graph) {
    let tree = Array(graph.length).fill().map(() => []);
    let edges = [];
    let edgesCount = 0;

    for (let point in graph) {
        for (let edge of graph[point]) {
            edges.push(new Edge(+point, edge[0], edge[1]));
        }
    }

    edges.sort((a, b) => a - b);
    let cost = 0;
    let unionFind = new UnionFind(Array(graph.length).fill().map((_, i) => i));

    for (let edge of edges) {
        if (unionFind.union(edge.from, edge.to)) {
            edgesCount++;
            cost += edge.weight;
            tree[edge.from].push([edge.to, edge.weight]);
            tree[edge.to].push([edge.from, edge.weight]);
        }
    }

    if (edgesCount !== graph.length - 1) return { cost: null, tree: null };
    
    return { cost, tree };
}

class Edge {
    constructor(from, to, weight) {
        this.weight = weight;
        this.from = from;
        this.to = to;
    }

    valueOf() { return this.weight; }
}

class UnionFind {
    #items
    #groups

    constructor(items=[]) {
        this.#items = [...items];
        this.#groups = new Map();
        for (let i = 0; i < items.length; i++) this.#groups.set(items[i], i);
    }

    add(item) {
        this.#items.push(item);
        this.#groups.set(this.#items[this.size() - 1], this.size() - 1);
    }

    find(item) {
        let root = this.#groups.get(item);

        if (root === undefined) throw new Error(`item not added: ${item}`);

        while (root !== this.#groups.get(this.#items[root])) {
            root = this.#groups.get(this.#items[root]);
        }

        for (let next = item; this.#groups.get(next) !== root;) {
            let newItem = this.#items[this.#groups.get(next)];
            this.#groups.set(next, root);
            next = newItem;
        }

        return root;
    }

    union(itemA, itemB) {
        let rootA = this.find(itemA);
        let rootB = this.find(itemB);

        if (rootA === rootB) return false;

        this.#groups.set(this.#items[rootA], rootB);

        return true;
    }

    size() { return this.#items.length; }
}

module.exports = { mst };