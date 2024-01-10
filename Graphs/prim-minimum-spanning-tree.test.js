let { mst } = require("./prim-minimum-spanning-tree");

let graph1 = [
    [[1, 10], [2, 1], [3, 4]],
    [[0, 10], [2, 3], [4, 0]],
    [[0, 1], [1, 3], [3, 2], [5, 8]],
    [[0, 4], [2, 2], [5, 2], [6, 7]],
    [[1, 0], [5, 1], [7, 8]],
    [[2, 8], [3, 2], [4, 1], [6, 6], [7, 9]],
    [[3, 7], [5, 6], [7, 12]],
    [[4, 8], [5, 9], [6, 12]]
];

let graph2 = [
    [[2, 0], [3, 5], [5, 7], [1, 9]],
    [[0, 9], [3, -2], [6, 4], [4, 3]],
    [[0, 0], [5, 6]],
    [[0, 5], [1, -2], [5, 2], [6, 3]],
    [[1, 3], [6, 6]],
    [[2, 6], [0, 7], [3, 2], [6, 1]],
    [[5, 1], [3, 3], [4, 6], [1, 4]]
];

let unconnectedGraph = [
    [[1, 5]],
    [[0, 5]],
    [[3, 4]],
    [[2, 4]]
];

describe("Testing Prim's Minimum Spanning Tree", () => {
    it("should return an object with a cost and a tree properties", () => {
        let result = mst(graph1);

        expect(typeof result).toBe("object");
        expect(result.hasOwnProperty("cost")).toBe(true);
        expect(result.hasOwnProperty("tree")).toBe(true);
    });

    it("should return 20 as the graph1 total cost", () => {
        expect(mst(graph1).cost).toBe(20);
    });

    it("should return a new graph with only the graph1 necessary edges", () => {
        let tree = mst(graph1).tree;
        let expectedTree = [
            [[2, 1]],
            [[4, 0]],
            [[0, 1], [3, 2]],
            [[2, 2], [5, 2]],
            [[1, 0], [5, 1], [7, 8]],
            [[3, 2], [4, 1], [6, 6]],
            [[5, 6]],
            [[4, 8]]
        ]

        for (let i = 0; i < tree.length; i++) {
            expect(tree[i].sort()).toStrictEqual(expectedTree[i].sort());
        }
    });

    it("should return 9 as the graph2 total cost", () => {
        expect(mst(graph2).cost).toBe(9);
    });

    it("should return a new graph with only the graph2 necessary edges", () => {
        let tree = mst(graph2).tree;
        let expectedTree = [
            [[2, 0], [3, 5]],
            [[3, -2], [4, 3]],
            [[0, 0]],
            [[0, 5], [1, -2], [5, 2]],
            [[1, 3]],
            [[3, 2], [6, 1]],
            [[5, 1]]
        ];
        
        for (let i = 0; i < tree.length; i++) {
            expect(tree[i].sort()).toStrictEqual(expectedTree[i].sort());
        }
    });

    it("should return a null cost for an unconnected graph", () => {
        expect(mst(unconnectedGraph).cost).toBe(null);
    });

    it("should return a null tree for an unconnected graph", () => {
        expect(mst(unconnectedGraph).tree).toBe(null);
    });
});