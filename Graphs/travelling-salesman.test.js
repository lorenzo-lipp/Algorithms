let { travellingSalesman } = require("./travelling-salesman");

let graph1 = [
    [[1, 4], [2, 1], [3, 9]],
    [[0, 3], [2, 6], [3, 11]],
    [[0, 4], [1, 1], [3, 2]],
    [[0, 6], [1, 5], [2, -4]]
];

let graph2 = [
    [[1, 16]],
    [[2, 21]],
    [[3, 12]],
    [[1, 9], [4, 15]],
    [[3, 15], [5, 16]],
    [[3, 7], [4, 16], [0, 34]]
];

let graph3 = [
    [[1, 12], [2, 10], [6, 12]],
    [[0, 12], [2, 8], [3, 12]],
    [[0, 10], [1, 8], [3, 11], [4, 3], [6, 9]],
    [[1, 12], [2, 11], [4, 11], [5, 10]],
    [[2, 3], [3, 11], [5, 6], [6, 7]],
    [[3, 10], [4, 6], [6, 9]],
    [[0, 12], [2, 9], [4, 7], [5, 9]]
];

describe("Testing Travelling Salesman", () => {
    it("should return an object with a distance and a path properties", () => {
        let result = travellingSalesman(graph1);

        expect(typeof result).toBe("object");
        expect(result.hasOwnProperty("distance")).toBe(true);
        expect(result.hasOwnProperty("path")).toBe(true);
    });

    it("distance property should be a number", () => {
        expect(typeof travellingSalesman(graph1).distance).toBe("number");
    });

    it("path property should be an array", () => {
        expect(Array.isArray(travellingSalesman(graph1).path)).toBe(true);
    });

    it("should return a path that starts and ends at the same node", () => {
        let path = travellingSalesman(graph1).path

        expect(path[0]).toBe(path[path.length - 1]);
    });

    it("should return a path that goes through all nodes", () => {
        let path = travellingSalesman(graph1).path;
        let set = new Set(path);

        expect(set.size).toBe(graph1.length);
    });

    it("should return a distance of 9 for graph1", () => {
        expect(travellingSalesman(graph1).distance).toBe(9);
    });

    it("should return the correct path for graph1", () => {
        expect(travellingSalesman(graph1).path).toStrictEqual([0, 3, 2, 1, 0]);
    });

    it("should return a distance of 114 for graph2", () => {
        expect(travellingSalesman(graph2).distance).toBe(114);
    });

    it("should return the correct path for graph2", () => {
        expect(travellingSalesman(graph2).path).toStrictEqual([0, 1, 2, 3, 4, 5, 0]);
    });

    it("should return a distance of 63 for graph3", () => {
        expect(travellingSalesman(graph3).distance).toBe(63);
    });

    it("should return any of the correct paths for graph3", () => {
        let path = travellingSalesman(graph3).path;

        if (path[1] === 2) expect(path).toStrictEqual([0, 2, 4, 6, 5, 3, 1, 0]);
        else expect(path).toStrictEqual([0, 1, 3, 5, 6, 4, 2, 0]);
        
    });
});