let { dungeonShortestPath } = require("./dungeon-shortest-path");

let dungeon = [
    ["S", ".", ".", "#", ".", ".", "."],
    [".", "#", ".", ".", ".", "#", "."],
    [".", "#", ".", ".", ".", ".", "."],
    [".", ".", "#", "#", ".", ".", "."],
    ["#", ".", "#", "E", ".", "#", "."]
];

describe("Testing Dungeon Shortest Path", () => {
    let result = dungeonShortestPath(dungeon);

    it("should return an array", () => {
        expect(Array.isArray(result)).toBe(true);
    });

    it("should return the start position as the first array element", () => {
        expect(result[0]).toStrictEqual([0, 0]);
    });

    it("should return the end position as the last array element", () => {
        expect(result[result.length - 1]).toStrictEqual([4, 3]);
    });

    it("should return a path with 10 positions", () => {
        expect(result.length).toBe(10);
    });

    it("should not have a obstacle in any of the path positions", () => {
        for (let position of result) {
            expect(dungeon[position[0]][position[1]] !== "#").toBe(true);
        }
    });

    it("should return null when there is no way to reach the end", () => {
        let unreachable = dungeonShortestPath([
            ["S", ".", ".", "#", ".", ".", "."],
            [".", "#", ".", ".", ".", "#", "."],
            [".", "#", ".", ".", ".", ".", "."],
            [".", ".", "#", "#", "#", ".", "."],
            ["#", ".", "#", "E", ".", "#", "."]
        ]);

        expect(unreachable).toBe(null);
    })
});