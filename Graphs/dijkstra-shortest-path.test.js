let { dijkstra } = require("./dijkstra-shortest-path");

let graph = [
    [[1, 4], [2, 1]],
    [[3, 1]],
    [[1, 2], [3, 5]],
    [[4, 3]],
    []
];

let graph2 = [
    [[1, 5], [2, 1]],
    [[2, 2], [4, 20], [3, 3]],
    [[1, 3], [4, 12]],
    [[2, 3], [4, 2], [5, 6]],
    [[5, 1]],
    []
];

describe("Testing Dijkstra Shortest Path", () => {
        it("should return an object with a distance and a path properties", () => {
        let result = dijkstra(0, 4, graph);

        expect(typeof result).toBe("object");
        expect(result.hasOwnProperty("distance")).toBe(true);
        expect(result.hasOwnProperty("path")).toBe(true);
    });

    it("should return 7 as the shortest distance from node 0 to node 4", () => {
        expect(dijkstra(0, 4, graph).distance).toBe(7);
    });

    it("should return the correct path from node 0 to node 4", () => {
        expect(dijkstra(0, 4, graph).path).toStrictEqual([0, 2, 1, 3, 4]);
    });

    it("should return 4 as the shortest distance from node 0 to node 3", () => {
        expect(dijkstra(0, 3, graph).distance).toBe(4);
    });

    it("should return 3 as the shortest distance from node 2 to node 3", () => {
        expect(dijkstra(2, 3, graph).distance).toBe(3);
    });

    it("should return the correct path from node 2 to node 3", () => {
        expect(dijkstra(2, 3, graph).path).toStrictEqual([2, 1, 3]);
    });

    it("should return 10 as the shortest distance from node 0 to node 5", () => {
        expect(dijkstra(0, 5, graph2).distance).toBe(10);
    });

    it("should return the correct path from node 0 to node 5", () => {
        expect(dijkstra(0, 5, graph2).path).toStrictEqual([0, 2, 1, 3, 4, 5]);
    });

    it("should return 6 as the shortest distance from node 1 to node 5", () => {
        expect(dijkstra(1, 5, graph2).distance).toBe(6);
    });

    it("should return the correct path from node 1 to node 5", () => {
        expect(dijkstra(1, 5, graph2).path).toStrictEqual([1, 3, 4, 5]);
    });

    it("should return Infinity as the distance from 5 to 0, representing no way to reach the node", () => {
        expect(dijkstra(5, 0, graph2).distance).toBe(Infinity);
    });

    it("should return a null path from 5 to 0, representing no way to reach the node", () => {
        expect(dijkstra(5, 0, graph2).path).toBe(null);
    });
})