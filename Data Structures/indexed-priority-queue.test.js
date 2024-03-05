const { IndexedPriorityQueue } = require("./indexed-priority-queue");

describe("Testing Indexed Priority Queue", () => {
    it("should have a method named insert, that receives a keyIndex and a value as a parameter and inserts it into the IPQ", () => {
        let ipq = new IndexedPriorityQueue(12);

        expect(typeof ipq.insert).toBe("function");
        ipq.insert(0, 5);
        expect(ipq.peekMinValue()).toBe(5);
        expect(ipq.peekMinKeyIndex()).toBe(0);
    });

    it("should have a method named delete, that deletes a keyIndex from the IPQ", () => {
        let ipq = new IndexedPriorityQueue(12);

        expect(typeof ipq.delete).toBe("function");

        ipq.insert(0, 5);
        expect(ipq.isEmpty()).toBe(false);
        ipq.delete(0);
        expect(ipq.isEmpty()).toBe(true);
    });

    it("should have a method named isEmpty, that returns true if IPQ is empty and false otherwise", () => {
        let ipq = new IndexedPriorityQueue(12);

        expect(typeof ipq.isEmpty).toBe("function");
        expect(ipq.isEmpty()).toBe(true);
        ipq.insert(0, 5);
        expect(ipq.isEmpty()).toBe(false);
    });

    it("should have a method named contains, that returns true if IPQ contains a keyIndex and false otherwise", () => {
        let ipq = new IndexedPriorityQueue(12);

        expect(typeof ipq.contains).toBe("function");
        ipq.insert(0, 5);
        expect(ipq.contains(0)).toBe(true);
        expect(ipq.contains(5)).toBe(false);
    });

    it("should have a method named getValueOf, that returns the value associated with the keyIndex", () => {
        let ipq = new IndexedPriorityQueue(12);

        expect(typeof ipq.getValueOf).toBe("function");
        ipq.insert(0, 5);
        expect(ipq.getValueOf(0)).toBe(5);
    });

    it("should have a method named peekMinKeyIndex, that returns the keyIndex of the smaller value", () => {
        let ipq = new IndexedPriorityQueue(12);

        expect(typeof ipq.peekMinKeyIndex).toBe("function");
        ipq.insert(3, 4);
        ipq.insert(7, 2);
        ipq.insert(0, 5);
        expect(ipq.peekMinKeyIndex()).toBe(7);
        expect(ipq.contains(7)).toBe(true);
    });

    it("should have a method named poolMinKeyIndex, that returns the keyIndex of the smaller value and removes it from IPQ", () => {
        let ipq = new IndexedPriorityQueue(12);

        expect(typeof ipq.poolMinKeyIndex).toBe("function");
        ipq.insert(3, 4);
        ipq.insert(7, 2);
        ipq.insert(0, 5);
        expect(ipq.poolMinKeyIndex()).toBe(7);
        expect(ipq.contains(7)).toBe(false);
    });

    it("should have a method named peekMinValue, that returns the smaller value", () => {
        let ipq = new IndexedPriorityQueue(12);

        expect(typeof ipq.peekMinValue).toBe("function");
        ipq.insert(3, 4);
        ipq.insert(7, 2);
        ipq.insert(0, 5);
        expect(ipq.peekMinValue()).toBe(2);
        expect(ipq.contains(7)).toBe(true);
    });

    it("should have a method named poolMinValue, that returns the smaller value and removes it from IPQ", () => {
        let ipq = new IndexedPriorityQueue(12);

        expect(typeof ipq.poolMinValue).toBe("function");
        ipq.insert(3, 4);
        ipq.insert(7, 2);
        ipq.insert(0, 5);
        expect(ipq.poolMinValue()).toBe(2);
        expect(ipq.contains(7)).toBe(false);
    });

    it("should have a method named update, that updates a value from a keyIndex", () => {
        let ipq = new IndexedPriorityQueue(12);

        expect(typeof ipq.update).toBe("function");
        ipq.insert(3, 4);
        ipq.insert(7, 2);
        ipq.insert(0, 5);
        ipq.update(7, 8);
        expect(ipq.peekMinValue()).toBe(4);
        expect(ipq.getValueOf(7)).toBe(8);
    });

    it("should have a method named decreaseKey, that decreases a value from a keyIndex", () => {
        let ipq = new IndexedPriorityQueue(12);

        expect(typeof ipq.decreaseKey).toBe("function");
        ipq.insert(3, 4);
        ipq.insert(7, 2);
        ipq.insert(0, 5);
        ipq.decreaseKey(3, 1);
        expect(ipq.peekMinValue()).toBe(1);
        expect(ipq.getValueOf(3)).toBe(1);
    });

    it("should have a method named increaseKey, that increases a value from a keyIndex", () => {
        let ipq = new IndexedPriorityQueue(12);

        expect(typeof ipq.increaseKey).toBe("function");
        ipq.insert(3, 4);
        ipq.insert(7, 2);
        ipq.insert(0, 5);
        ipq.increaseKey(7, 8);
        expect(ipq.peekMinValue()).toBe(4);
        expect(ipq.getValueOf(7)).toBe(8);
    });

    it("should return the correct order", () => {
        let ipq = new IndexedPriorityQueue(12);
        let values = [3, 15, 11, 17, 7, 9, 2, 1, 6, 5, 16, 4];
        let sortedOutput = [...values].sort((a, b) => a - b);

        for (let id = 0; id < values.length; id++) ipq.insert(id, values[id]);
        for (let i = 0; i < values.length; i++) {
            expect(ipq.poolMinValue()).toBe(sortedOutput[i]);
        }
    })
})