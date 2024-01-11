let { tarjanScc } = require("./tarjan-strongly-connected-components");

let graph1 = [
    [1],
    [2],
    [0],
    [4, 7],
    [5],
    [0, 6],
    [0, 2, 4],
    [3, 5]
];

let graph2 = [
    [1, 2],
    [2, 6],
    [3],
    [4],
    [5],
    [2],
    [0]
];

let graph3 = [
    [1, 8],
    [6],
    [3, 6],
    [5],
    [1, 8],
    [0, 2, 6],
    [1],
    [2, 3, 7],
    [0, 4]
];

describe("Testing Tarjan's Strongly Connected Components", () => {
    it("should return an array", () => {
        expect(Array.isArray(tarjanScc(graph1))).toBe(true);
    })

    it("should return three strongly connected components on graph1", () => {
        expect(tarjanScc(graph1).length).toBe(3);
    });

    it("should return the correct strongly connected components on graph1", () => {
        let expectedResult = [
            [0, 1, 2],
            [3, 7],
            [4, 5, 6]
        ].sort();
        let result = tarjanScc(graph1).sort();

        for (let i = 0; i < expectedResult.length; i++) {
            expect(result[i].sort()).toStrictEqual(expectedResult[i].sort());
        }
    });

    it("should return two strongly connected components on graph2", () => {
        expect(tarjanScc(graph2).length).toBe(2);
    });

    it("should return the correct strongly connected components on graph2", () => {
        let expectedResult = [
            [0, 1, 6],
            [2, 3, 4, 5]
        ].sort();
        let result = tarjanScc(graph2).sort();

        for (let i = 0; i < expectedResult.length; i++) {
            expect(result[i].sort()).toStrictEqual(expectedResult[i].sort());
        }
    });

    it("should return four strongly connected components on graph3", () => {
        expect(tarjanScc(graph3).length).toBe(4);
    });

    it("should return the correct strongly connected components on graph3", () => {
        let expectedResult = [
            [0, 4, 8],
            [1, 6],
            [2, 3, 5],
            [7]
        ].sort();
        let result = tarjanScc(graph3).sort();

        for (let i = 0; i < expectedResult.length; i++) {
            expect(result[i].sort()).toStrictEqual(expectedResult[i].sort());
        }
    });
});