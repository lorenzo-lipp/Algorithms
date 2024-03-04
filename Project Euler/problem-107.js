/* 
Problem 107: Minimal network

The following undirected network consists of seven vertices and twelve edges with a total weight of 243.
[https://cdn.freecodecamp.org/curriculum/project-euler/minimal-network-1.png]
The same network can be represented by the matrix below.
     A     B     C	   D	 E	   F	 G
A    -     16	 12	   21	 -	   -	 -
B    16    -	 -	   17	 20	   -	 -
C    12    -	 -	   28	 -	   31	 -
D    21    17	 28	   -	 18	   19	 23
E    -     20	 -	   18	 -	   -	 11
F    -     -	 31	   19	 -	   -	 27
G    -     -	 -	   23	 11	   27	 -
However, it is possible to optimise the network by removing some edges and still ensure that all points on the network remain connected. 
The network which achieves the maximum saving is shown below. It has a weight of 93, representing a saving of 243 − 93 = 150 from the original network.
[https://cdn.freecodecamp.org/curriculum/project-euler/minimal-network-2.png]
Using network, an 2D array representing network in matrix form, find the maximum saving which can be achieved by removing redundant edges whilst ensuring that the network remains connected. 
Vertices not having connection will be represented with -1.
*/

function minimalNetwork(network) {
    let edges = matrixToEdges(network);
    let edgesCount = network.reduce((a, b) => a + b.reduce((a, b) => a + (b !== -1 ? 0.5 : 0), 0), 0);
    let sum = 0;
    let reachableSet = new Set();
    let ipq = new IndexedPriorityQueue(edgesCount);
    let id = 0;

    reachableSet.add(0);
    
    edges[0].forEach(edge => ipq.insert(id++, edge));

    while (!ipq.isEmpty()) {
        let edge = ipq.poolMinValue();
        let isFromReachable = reachableSet.has(edge.from);
        let isToReachable = reachableSet.has(edge.to)

        if (isFromReachable && isToReachable) {
            sum += edge.weight;
            continue;
        } else if (isFromReachable) {
            reachableSet.add(edge.to);
            
            edges[edge.to].forEach(edge => {
                if (reachableSet.has(edge.from) && reachableSet.has(edge.to)) return;

                ipq.insert(id++, edge);
            });
        } else {
            reachableSet.add(edge.from);

            edges[edge.from].forEach(edge => {
                if (reachableSet.has(edge.from) && reachableSet.has(edge.to)) return;

                ipq.insert(id++, edge);
            });
        }
    }

    return sum;
}

function matrixToEdges(matrix) {
    let edges = Array(matrix.length).fill().map(() => []);

    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix.length; j++) {
            if (matrix[i][j] != -1) {
                let edge = new Edge(i, j, matrix[i][j]);

                edges[i].push(edge);
                edges[j].push(edge);
            }
        }
    }

    return edges;
}

class Edge {
    constructor(from, to, weight) {
        this.from = from;
        this.to = to;
        this.weight = weight;
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

module.exports = { minimalNetwork };