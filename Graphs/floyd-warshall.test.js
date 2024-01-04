let { floydWarshall } = require("./floyd-warshall");

let graph1 = [
    [[1, 4], [2, 1]],
    [[3, 1]],
    [[1, 2], [3, 5]],
    [[4, 3]],
    []
];

let graph2 = [
    [[1, 4], [2, 1], [3, 9]],
    [[0, 3], [2, 6], [3, 11]],
    [[0, 4], [1, 1], [3, 2]],
    [[0, 6], [1, 5], [2, 4]]
];

let graph3 = [
    [[1, 2], [4, 3], [3, 5]],
    [[0, 3], [3, 2], [2, 2], [5, 6]],
    [[5, 1], [3, 1]],
    [[4, 1]],
    [[3, 1]],
    []
];

describe("Testing Floyd-Warshall All Paths Shortest Path", () => {
    let result1 = floydWarshall(graph1);
    let result2 = floydWarshall(graph2);
    let result3 = floydWarshall(graph3);

    it("should return an object with a getShortestPath method", () => {
        expect(typeof result1).toBe("object");
        expect("getShortestPath" in result1).toBe(true);
    });

    it("should return 7 as the shortest distance from node 0 to node 4 on graph1", () => {
        expect(result1.getShortestPath(0, 4).distance).toBe(7);
    });

    it("should return the correct path from node 0 to node 4 on graph1", () => {
        expect(result1.getShortestPath(0, 4).path).toStrictEqual([0, 2, 1, 3, 4]);
    });

    it("should return Infinity when there is no way to reach the node", () => {
        expect(result1.getShortestPath(4, 0).distance).toBe(Infinity);
    });

    it("should return a null path when there is no way to reach the node", () => {
        expect(result1.getShortestPath(4, 0).path).toBe(null);
    });

    it("should return 3 as the shortest distance from node 0 to node 3 on graph2", () => {
        expect(result2.getShortestPath(0, 3).distance).toBe(3);
    });

    it("should return the correct path from node 0 to node 3 on graph2", () => {
        expect(result2.getShortestPath(0, 3).path).toStrictEqual([0, 2, 3]);
    });

    it("should return 5 as the shortest distance from node 0 to node 5 on graph3", () => {
        expect(result3.getShortestPath(0, 5).distance).toBe(5);
    });

    it("should return the correct path from node 0 to node 5 on graph3", () => {
        expect(result3.getShortestPath(0, 5).path).toStrictEqual([0, 1, 2, 5]);
    });

    it("should return 4 as the shortest distance from node 0 to node 3 on graph3", () => {
        expect(result3.getShortestPath(0, 3).distance).toBe(4);
    });

    it("should return the correct path from node 0 to node 3 on graph3", () => {
        expect(result3.getShortestPath(0, 3).path).toStrictEqual([0, 1, 3]);
    });
})