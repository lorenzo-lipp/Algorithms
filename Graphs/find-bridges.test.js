let { findBridges } = require("./find-bridges");

let adjacencyList = [
    [1, 2],
    [0, 2],
    [0, 1, 3, 5],
    [2, 4],
    [3],
    [2, 6, 8],
    [5, 7],
    [6, 8],
    [5, 7]
];

let directedGraph = [
    [1],
    [2],
    [0, 3, 5],
    [4],
    [],
    [6],
    [7],
    [8],
    [5]
];

let deeplyConnected = [
    [1, 2, 3],
    [0, 2, 3],
    [0, 1, 3],
    [0, 1, 2]
];

let adjacencyList2 = [
    [1, 2],
    [0, 2],
    [0, 1, 3, 5],
    [2, 4],
    [3],
    [2, 6, 8],
    [5, 7],
    [6, 8],
    [2, 5, 7]
];

describe("Testing Find Bridges", () => {
    it("should return an array", () => {
        expect(Array.isArray(findBridges(adjacencyList))).toBe(true);
    })

    it("should return the correct bridges when inputed an adjacency list", () => {
        expect(findBridges(adjacencyList).sort()).toStrictEqual([[2, 3], [2, 5], [3, 4]].sort());
    });

    it("should return the correct bridges when inputed a directed graph", () => {
        expect(findBridges(directedGraph).sort()).toStrictEqual([[2, 3], [2, 5], [3, 4]].sort());
    });

    it("should return an empty array when inputed a deeply connected graph", () => {
        expect(findBridges(deeplyConnected)).toStrictEqual([]);
    });

    it("should return only two bridges when node 8 is connected to node 2", () => {
        expect(findBridges(adjacencyList2).sort()).toStrictEqual([[2, 3], [3, 4]].sort());
    });
});