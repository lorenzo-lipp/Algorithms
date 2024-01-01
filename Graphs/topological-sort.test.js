let { topologicalSort } = require("./topological-sort");

let graph = [
    [3],
    [3],
    [0, 1],
    [6, 7],
    [0, 3, 5],
    [9, 10],
    [8],
    [8, 9],
    [11],
    [11, 12],
    [9],
    [],
    []
];

describe("Testing Topological Sort", () => {
    let result = topologicalSort(graph);

    it("should return an array", () => {
        expect(Array.isArray(result)).toBe(true);
    });

    it("should have 13 nodes in the array", () => {
        expect(result.length).toBe(13);
    });

    it("should have node 0 after nodes 2 or 4", () => {
        expect(result.indexOf(0) > Math.max(result.indexOf(2), result.indexOf(4))).toBe(true);
    });

    it("should have node 3 after nodes 0, 1 or 4", () => {
        expect(result.indexOf(3) > Math.max(result.indexOf(0), result.indexOf(1), result.indexOf(4))).toBe(true);
    });

    it("should have node 7 after node 3", () => {
        expect(result.indexOf(7) > result.indexOf(3)).toBe(true);
    });

    it("should have node 10 after node 5", () => {
        expect(result.indexOf(10) > result.indexOf(5)).toBe(true);
    });
});