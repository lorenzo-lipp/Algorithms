let { longestPath } = require("./longest-path");

let graph = [
    [[1, 3], [2, 6]],
    [[2, 4], [3, 4], [4, 11]],
    [[3, 8], [6, 11]],
    [[4, -4], [5, 5], [6, 2]],
    [[7, 9]],
    [[7, 1]],
    [[7, 2]],
    []
];


describe("Testing Longest Path", () => {
    it("should return an object with a distance and a path properties", () => {
        let result = longestPath(0, 7, graph);

        expect(typeof result).toBe("object");
        expect(result.hasOwnProperty("distance")).toBe(true);
        expect(result.hasOwnProperty("path")).toBe(true);
    });

    it("should return 23 as the longest path from 0 to 7", () => {
        expect(longestPath(0, 7, graph).distance).toBe(23);
    });

    it("should return the correct path from 0 to 7", () => {
        expect(longestPath(0, 7, graph).path).toStrictEqual([0, 1, 4, 7]);
    });

    it("should return Infinity as the longest path from 7 to 0, representing no way to reach the node", () => {
        expect(longestPath(7, 0, graph).distance).toBe(Infinity);
    });

    it("should return a null path when going from 7 to 0", () => {
        expect(longestPath(7, 0, graph).path).toBe(null);
    });

    it("should return 14 as the longest path from 2 to 7", () => {
        expect(longestPath(2, 7, graph).distance).toBe(14);
    });

    it("should return the correct path from 2 to 7", () => {
        expect(longestPath(2, 7, graph).path).toStrictEqual([2, 3, 5, 7]);
    });

    it("should return 11 as the longest path from 1 to 4", () => {
        expect(longestPath(1, 4, graph).distance).toBe(11);
    });

    it("should return the correct path from 1 to 4", () => {
        expect(longestPath(1, 4, graph).path).toStrictEqual([1, 4]);
    });

    it("should return 0 as the longest path from 5 to 5", () => {
        expect(longestPath(5, 5, graph).distance).toBe(0);
    });

    it("should return a path with only 5 when going from 5 to 5", () => {
        expect(longestPath(5, 5, graph).path).toStrictEqual([5]);
    });
});