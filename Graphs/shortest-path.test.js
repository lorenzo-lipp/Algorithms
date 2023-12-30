let { shortestPath } = require("./shortest-path");

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


describe("Testing Shortest Path", () => {
    it("should return an object with a distance and a path properties", () => {
        let result = shortestPath(0, 7, graph);

        expect(typeof result).toBe("object");
        expect(result.hasOwnProperty("distance")).toBe(true);
        expect(result.hasOwnProperty("path")).toBe(true);
    });

    it("should return 11 as the shortest path from 0 to 7", () => {
        expect(shortestPath(0, 7, graph).distance).toBe(11);
    });

    it("should return the correct path from 0 to 7", () => {
        expect(shortestPath(0, 7, graph).path).toStrictEqual([0, 1, 3, 6, 7]);
    });

    it("should return Infinity as the shortest path from 7 to 0, representing no way to reach the node", () => {
        expect(shortestPath(7, 0, graph).distance).toBe(Infinity);
    });

    it("should return a null path when going from 7 to 0", () => {
        expect(shortestPath(7, 0, graph).path).toBe(null);
    });

    it("should return 4 as the shortest path from 3 to 7", () => {
        expect(shortestPath(3, 7, graph).distance).toBe(4);
    });

    it("should return the correct path from 3 to 7", () => {
        expect(shortestPath(3, 7, graph).path).toStrictEqual([3, 6, 7]);
    });

    it("should return 0 as the shortest path from 1 to 4", () => {
        expect(shortestPath(1, 4, graph).distance).toBe(0);
    });

    it("should return the correct path from 1 to 4", () => {
        expect(shortestPath(1, 4, graph).path).toStrictEqual([1, 3, 4]);
    });

    it("should return 0 as the shortest path from 5 to 5", () => {
        expect(shortestPath(5, 5, graph).distance).toBe(0);
    });

    it("should return a path with only 5 when going from 5 to 5", () => {
        expect(shortestPath(5, 5, graph).path).toStrictEqual([5]);
    });
});