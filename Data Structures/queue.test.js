const { Queue } = require("./queue");

describe("Testing Queue", () => {
    it("should have a method named enqueue", () => {
        let queue = new Queue();

        expect(typeof queue.enqueue).toBe("function");
    });

    it("should have a method named dequeue", () => {
        let queue = new Queue();

        expect(typeof queue.dequeue).toBe("function");
    });

    it("should have a method named peek", () => {
        let queue = new Queue();

        expect(typeof queue.peek).toBe("function");
    });

    it("should have a method named size", () => {
        let queue = new Queue();

        expect(typeof queue.size).toBe("function");
    });

    it("should have a method named isEmpty", () => {
        let queue = new Queue();

        expect(typeof queue.isEmpty).toBe("function");
    });

    it("size should return 0 for an empty queue", () => {
        let queue = new Queue();

        expect(queue.size()).toBe(0);
    });

    it("isEmpty should return true for an empty queue", () => {
        let queue = new Queue();

        expect(queue.isEmpty()).toBeTruthy();
    });

    it("enqueue should add a value to the queue", () => {
        let queue = new Queue();

        expect(queue.size()).toBe(0);
        queue.enqueue(2);
        expect(queue.size()).toBe(1);
    });

    it("dequeue should return the first value added in the queue and remove it", () => {
        let queue = new Queue();

        queue.enqueue(2);
        queue.enqueue(1);
        expect(queue.dequeue()).toBe(2);
        queue.enqueue(3);
        expect(queue.dequeue()).toBe(1);
        expect(queue.dequeue()).toBe(3);
        expect(queue.isEmpty()).toBeTruthy();
    });

    it("peek should return the first value added in the queue but not remove it", () => {
        let queue = new Queue();

        queue.enqueue(2);
        queue.enqueue(1);
        expect(queue.peek()).toBe(2);
        expect(queue.peek()).toBe(2);
    });
})