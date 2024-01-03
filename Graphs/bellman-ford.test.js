let { bellmanFord } = require("./bellman-ford");

let graph = [
    [[1, 5]],
    [[6, 60], [5, 30], [2, 20]],
    [[3, 10], [4, 75]],
    [[2, -15]], 
    [[9, 100]],
    [[4, 25], [6, 5], [8, 50]],
    [[7, -50]],
    [[8, -10]],
    [],
    []
];

describe("Testing Bellman-Ford", () => {
    let result = bellmanFord(0, graph);

    it("should return an array", () => {
        expect(Array.isArray(result)).toBe(true);
    });

    it("should have a negative loop at node 2", () => {
        expect(result[2]).toBe(-Infinity);
    });

    it("should have a negative loop at node 3", () => {
        expect(result[3]).toBe(-Infinity);
    });

    it("should have a negative loop at node 4", () => {
        expect(result[4]).toBe(-Infinity);
    });

    it("should have a negative loop at node 9", () => {
        expect(result[9]).toBe(-Infinity);
    });

    it("should return a distance of 0 from node 0 to node 0", () => {
        expect(result[0]).toBe(0);
    });

    it("should return a distance of 5 from node 0 to node 1", () => {
        expect(result[1]).toBe(5);
    });

    it("should return a distance of 40 from node 0 to node 6", () => {
        expect(result[6]).toBe(40);
    });
});