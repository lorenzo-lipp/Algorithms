let { depthFirstSearch } = require("./depth-first-search");

let graph = [
    [1, 9],
    [0, 8],
    [3],
    [2, 4, 5],
    [3],
    [3, 6],
    [5, 7],
    [3, 6, 8, 10, 11],
    [1, 7, 9],
    [0, 8],
    [7, 11],
    [10, 7],
    []
];

describe("Testing Depth First Search", () => {
    let result = depthFirstSearch(0, graph);

    it("should not reach node 12 when start at 0", () => {
        expect(result.includes(12)).toBe(false);
    });

    it("should reach nodes 2 and 4 before node 3 when start at 0", () => {
        expect(result.indexOf(2) < result.indexOf(3)).toBe(true);
        expect(result.indexOf(4) < result.indexOf(3)).toBe(true);
    });

    it("should reach node 10 and 11 before node 7 when start at 0", () => {
        expect(result.indexOf(10) < result.indexOf(7)).toBe(true);
        expect(result.indexOf(11) < result.indexOf(7)).toBe(true);
    });

    it("should reach node 7 before node 8 when start at 0", () => {
        expect(result.indexOf(7) < result.indexOf(8)).toBe(true);
    });

    it("should reach only node 12 when start at 12", () => {
        let result2 = depthFirstSearch(12, graph);

        expect(result2.indexOf(12)).toBe(0);
        expect(result2.length).toBe(1);
    });
});