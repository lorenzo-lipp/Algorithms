class Stack {
    #items
    constructor() { this.#items = []; }

    push(value) { return this.#items.push(value); }
    pop() { return this.#items.pop(); }
    peek() { return this.isEmpty() ? undefined : this.#items[this.size() - 1]; }
    size() { return this.#items.length; }
    isEmpty() { return this.size() === 0; }

    *[Symbol.iterator]() {
        for (let i = 0; i <= this.#items.length; i++) {
            yield this.#items[i];
        }
    }
}

module.exports = { Stack };