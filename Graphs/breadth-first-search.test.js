let { breadthFirstSearch } = require("./breadth-first-search");

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

describe("Testing Breadth First Search", () => {
    let result = breadthFirstSearch(0, graph);

    it("should not reach node 12 when start at 0", () => {
        expect(result.includes(12)).toBe(false);
    });

    it("should reach nodes 1 and 9 before node 8 when start at 0", () => {
        expect(result.indexOf(1) < result.indexOf(8)).toBe(true);
        expect(result.indexOf(9) < result.indexOf(8)).toBe(true);
    });

    it("should reach nodes 3, 6, 10 and 11 before nodes 2 and 4 when start at 0", () => {
        expect(result.indexOf(3) < result.indexOf(2)).toBe(true);
        expect(result.indexOf(3) < result.indexOf(4)).toBe(true);
        
        expect(result.indexOf(6) < result.indexOf(2)).toBe(true);
        expect(result.indexOf(6) < result.indexOf(4)).toBe(true);

        expect(result.indexOf(10) < result.indexOf(2)).toBe(true);
        expect(result.indexOf(10) < result.indexOf(4)).toBe(true);

        expect(result.indexOf(11) < result.indexOf(2)).toBe(true);
        expect(result.indexOf(11) < result.indexOf(4)).toBe(true);
    });

    it("should reach node 7 right after 8 when start at 0", () => {
        expect(result.indexOf(7) - result.indexOf(8)).toBe(1);
    });

    it("should reach only node 12 when start at 12", () => {
        let result2 = breadthFirstSearch(12, graph);

        expect(result2.indexOf(12)).toBe(0);
        expect(result2.length).toBe(1);
    });
});