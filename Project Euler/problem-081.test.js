const { pathSumTwoWays } = require("./problem-081");
const fs = require("fs");

const matrix1 = [
    [131, 673, 234, 103, 18],
    [201, 96, 342, 965, 150],
    [630, 803, 746, 422, 111],
    [537, 699, 497, 121, 956],
    [805, 732, 524, 37, 331]
];
const matrix2 = JSON.parse(fs.readFileSync("./problem-081.test.json"));

describe("Testing problem 81: path sum two ways", () => {
    it("should return a number", () => {
        expect(typeof pathSumTwoWays(matrix1)).toBe("number");
    });

    it("should return 2427 when input matrix1", () => {
        expect(pathSumTwoWays(matrix1)).toBe(2427);
    });

    it("should return 427337 when input matrix2", () => {
        expect(pathSumTwoWays(matrix2)).toBe(427337);
    });
});