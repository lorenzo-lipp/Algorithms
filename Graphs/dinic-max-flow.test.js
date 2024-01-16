let { dinic } = require("./dinic-max-flow");

let graph1 = [
    [[2, 25]],
    [[3, 15]],
    [[5, 10]],
    [[5, 10], [0, 6]],
    [[0, 10], [1, 10]],
    [],
];

let graph2 = [
    [[3, 10]],
    [[2, 10]],
    [[5, 15]],
    [[1, 20], [6, 15]],
    [[1, 15], [3, 3]],
    [[4, 4], [8, 10]],
    [[7, 10], [10, 15]],
    [[4, 10], [5, 7]],
    [[10, 10]],
    [[0, 10], [1, 3], [2, 10]],
    []
];

let graph3 = [
    [[1, 5], [2, 10], [3, 5]],
    [[4, 10]],
    [[1, 15], [5, 20]],
    [[6, 10]],
    [[5, 25], [7, 10]],
    [[3, 5], [8, 30]],
    [[8, 5], [9, 10]],
    [[10, 5]],
    [[4, 15], [9, 5], [10, 15]],
    [[10, 10]],
    []
];

describe("Testing Dinic's Max Flow", () => {
    it("should return an object with a maxFlow and an edges properties", () => {
        let result = dinic(4, 5, graph1);

        expect(typeof result).toBe("object");
        expect(result.hasOwnProperty("maxFlow")).toBe(true);
        expect(result.hasOwnProperty("edges")).toBe(true);
    });

    it("maxFlow property should be a number", () => {
        expect(typeof dinic(4, 5, graph1).maxFlow).toBe("number");
    });

    it("edges property should be an array of adjacent edges", () => {
        let edges = dinic(4, 5, graph1).edges;

        expect(Array.isArray(edges)).toBe(true);

        for (let i = 0; i < edges.length; i++) {
            for (let j = 0; j < edges[i].length; j++) {
                let edge = edges[i][j];

                expect(edge.hasOwnProperty("from")).toBe(true);
                expect(edge.hasOwnProperty("to")).toBe(true);
                expect(edge.hasOwnProperty("flow")).toBe(true);
                expect(edge.hasOwnProperty("capacity")).toBe(true);
            }
        }
    });

    it("should return a maxFlow of 20 for graph1", () => {
        expect(dinic(4, 5, graph1).maxFlow).toBe(20);
    });

    it("should return have a correct flow for graph1", () => {
        let edges = dinic(4, 5, graph1).edges;

        expect(edges[0].find(e => e.to === 2).flow).toBe(10);
        expect(edges[2].find(e => e.to === 5).flow).toBe(10);
        expect(edges[1].find(e => e.to === 3).flow).toBe(10);
        expect(edges[3].find(e => e.to === 0).flow).toBe(0);
        expect(edges[3].find(e => e.to === 5).flow).toBe(10);
        expect(edges[4].find(e => e.to === 0).flow).toBe(10);
        expect(edges[4].find(e => e.to === 1).flow).toBe(10);
    });

    it("should return a maxFlow of 23 for graph2", () => {
        expect(dinic(9, 10, graph2).maxFlow).toBe(23);
    });

    it("should return have a correct flow for graph2", () => {
        let edges = dinic(9, 10, graph2).edges;

        expect(edges[0].find(e => e.to === 3).flow).toBe(10);
        expect(edges[1].find(e => e.to === 2).flow).toBe(3);
        expect(edges[2].find(e => e.to === 5).flow).toBe(13);
        expect(edges[3].find(e => e.to === 1).flow).toBe(0);
        expect(edges[3].find(e => e.to === 6).flow).toBe(13);
        expect(edges[4].find(e => e.to === 1).flow).toBe(0);
        expect(edges[4].find(e => e.to === 3).flow).toBe(3);
        expect(edges[5].find(e => e.to === 4).flow).toBe(3);
        expect(edges[5].find(e => e.to === 8).flow).toBe(10);
        expect(edges[6].find(e => e.to === 7).flow).toBe(0);
        expect(edges[6].find(e => e.to === 10).flow).toBe(13);
        expect(edges[7].find(e => e.to === 4).flow).toBe(0);
        expect(edges[7].find(e => e.to === 5).flow).toBe(0);
        expect(edges[8].find(e => e.to === 10).flow).toBe(10);
        expect(edges[9].find(e => e.to === 0).flow).toBe(10);
        expect(edges[9].find(e => e.to === 1).flow).toBe(3);
        expect(edges[9].find(e => e.to === 2).flow).toBe(10);
    });

    it("should return a maxFlow of 20 for graph3", () => {
        expect(dinic(0, 10, graph3).maxFlow).toBe(20);
    });
});