let { eulerianPath } = require("./eulerian-path");

let graph1 = [
    [],
    [2, 3],
    [2, 4, 4],
    [1, 2, 5],
    [3, 6],
    [6],
    [3]
];

let graph2 = [
    [3, 3],
    [0],
    [0],
    [2, 1]
];

let graph3 = [
    [],
    [2, 3],
    [3],
    [4, 7],
    [5, 7],
    [9],
    [7],
    [8, 9],
    [1],
    [4, 6]
];

describe("Testing Eulerian Path", () => {
    it("should return an array", () => {
        expect(Array.isArray(eulerianPath(graph1))).toBe(true);
    });

    it("should return a path for graph1 with 13 nodes traveled", () => {
        expect(eulerianPath(graph1).length).toBe(13);
    });

    it("should return a correct path for graph1", () => {
        let path = eulerianPath(graph1);

        for (let i = 0; i < path.length - 1; i++) {
            expect(graph1[path[i]].includes(path[i + 1])).toBe(true);
        }
    });

    it("should return a path for graph2 with 7 nodes traveled", () => {
        expect(eulerianPath(graph2).length).toBe(7);
    });

    it("should return a correct path for graph2", () => {
        let path = eulerianPath(graph2);

        for (let i = 0; i < path.length - 1; i++) {
            expect(graph2[path[i]].includes(path[i + 1])).toBe(true);
        }
    });

    it("should return a path for graph3 with 15 nodes traveled", () => {
        expect(eulerianPath(graph3).length).toBe(15);
    });

    it("should return a correct path for graph3", () => {
        let path = eulerianPath(graph3);

        for (let i = 0; i < path.length - 1; i++) {
            expect(graph3[path[i]].includes(path[i + 1])).toBe(true);
        }
    });
});