let { findArticulation } = require("./find-articulation-points");

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

let graph2 = [
    [1],
    [0, 2, 3],
    [1, 3],
    [1, 2]
];

describe("Testing Find Articulation Points", () => {
    it("should return an array", () => {
        expect(Array.isArray(findArticulation(adjacencyList))).toBe(true);
    })

    it("should return the correct articulation points when inputed an adjacency list", () => {
        expect(findArticulation(adjacencyList).sort()).toStrictEqual([2, 3, 5]);
    });

    it("should return the correct bridges when inputed a directed graph", () => {
        expect(findArticulation(directedGraph).sort()).toStrictEqual([2, 3, 5]);
    });

    it("should return an empty array when inputed a deeply connected graph", () => {
        expect(findArticulation(deeplyConnected)).toStrictEqual([]);
    });

    it("should return only two points when node 8 is connected to node 2", () => {
        expect(findArticulation(adjacencyList2).sort()).toStrictEqual([2, 3]);
    });

    it("should return only one point when inputed graph2", () => {
        expect(findArticulation(graph2)).toStrictEqual([1]);
    });
});