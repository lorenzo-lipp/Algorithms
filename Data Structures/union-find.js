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

module.exports = { UnionFind };