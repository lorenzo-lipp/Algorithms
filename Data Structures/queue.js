class Queue {
    #items;
    #start;
    #end;

    constructor() {
        this.#items = {};
        this.#start = this.#end = 0;
    }

    enqueue(value) { this.#items[this.#end++] = value; }
    dequeue() { 
        if (this.isEmpty()) return;
        let value = this.#items[this.#start];
        delete this.#items[this.#start++];
        return value; 
    }
    peek() { return this.#items[this.#start]; }
    isEmpty() { return this.size() === 0; }
    size() { return this.#end - this.#start; }

    *[Symbol.iterator]() {
        for (let i = this.#start; i < this.#end; i++) {
            yield this.#items[i];
        }
    }
}

module.exports = { Queue };