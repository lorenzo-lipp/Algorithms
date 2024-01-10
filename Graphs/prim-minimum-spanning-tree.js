function mst(graph) {
    let tree = Array(graph.length).fill().map(() => []);
    let edges = 0;
    let cost = 0;
    let visited = Array(graph.length).fill(false);
    let ipq = new IndexedPriorityQueue(graph.length);
    
    for (let [node, weight] of graph[0]) ipq.insert(node, new Edge(0, node, weight));
    visited[0] = true;

    while (!ipq.isEmpty()) {
        let [node, edge] = [ipq.peekMinKeyIndex(), ipq.poolMinValue()];

        if (visited[node]) continue;
        visited[node] = true;

        cost += edge.weight;
        tree[edge.to].push([edge.from, edge.weight]);
        tree[edge.from].push([edge.to, edge.weight]);
        edges++;

        for (let [nextNode, nextWeight] of graph[node]) {
            if (visited[nextNode]) continue;
            if (!ipq.contains(nextNode)) ipq.insert(nextNode, new Edge(node, nextNode, nextWeight));
            else ipq.decreaseKey(nextNode, new Edge(node, nextNode, nextWeight));
        }
    }

    if (edges !== graph.length - 1) return { cost: null, tree: null };
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

class IndexedPriorityQueue {
    constructor(maxSize) {
        this.inverseMap = Array(maxSize).fill(-1);
        this.positionMap = Array(maxSize).fill(-1);
        this.values = Array(maxSize).fill(null);
        this.size = 0;
    }

    isEmpty() { 
        return this.size === 0; 
    }

    delete(ki) {
        let i = this.positionMap[ki];
        this.#swap(i, --this.size);
        this.#sink(i);
        this.#swim(i);

        let value = this.getValueOf(ki);
        this.values[ki] = null;
        this.positionMap[ki] = -1;
        this.inverseMap[this.size] = -1;

        return value;
    }

    getValueOf(ki) {
        return this.values[ki];
    }

    contains(ki) {
        return this.positionMap[ki] !== -1;
    }

    peekMinKeyIndex() {
        return this.inverseMap[0];
    }

    poolMinKeyIndex() {
        let minKey = this.peekMinKeyIndex();
        this.delete(minKey);
        return minKey;
    }

    peekMinValue() {
        return this.getValueOf(this.inverseMap[0]);
    }

    poolMinValue() {
        let minVal = this.peekMinValue();
        this.delete(this.peekMinKeyIndex());
        return minVal;
    }

    insert(ki, value) {
        this.positionMap[ki] = this.size;
        this.inverseMap[this.size] = ki;
        this.values[ki] = value;
        this.#swim(this.size++);
    }

    update(ki, value) {
        let i = this.positionMap[ki];
        let oldValue = this.getValueOf(ki);

        this.values[ki] = value;
        this.#sink(i);
        this.#swim(i);

        return oldValue;
    }

    decreaseKey(ki, value) {
        if (value < this.getValueOf(ki)) {
            this.values[ki] = value;
            this.#swim(this.positionMap[ki]);
        }
    }

    increaseKey(ki, value) {
        if (this.getValueOf(ki) < value) {
            this.values[ki] = value;
            this.#sink(this.positionMap[ki]);
        }
    }

    #sink(i) {
        for (let j = this.#minChild(i); j != -1; j = this.#minChild(i)) {
            this.#swap(i, j);
            i = j;
        }
    }

    #swim(i) {
        while (this.#less(i, this.#getParent(i))) {
            this.#swap(i, this.#getParent(i));
            i = this.#getParent(i);
        }
    }

    #minChild(i) {
        let index = -1;
        let from = this.#getChild(i);
        let to = Math.min(this.size, from + 2);

        for (let j = from; j < to; j++) {
            if (this.#less(j, i)) index = i = j;
        }

        return index;
    }

    #swap(i, j) {
        this.positionMap[this.inverseMap[j]] = i;
        this.positionMap[this.inverseMap[i]] = j;
        [this.inverseMap[i], this.inverseMap[j]] = [this.inverseMap[j], this.inverseMap[i]]; 
    }

    #less(i, j) {
        return this.getValueOf(this.inverseMap[i]) - this.getValueOf(this.inverseMap[j]) < 0;
    }

    #getParent(i) {
        return Math.floor((i - 1) / 2);
    }

    #getChild(i) {
        return 2 * i + 1;
    }
}

module.exports = { mst };