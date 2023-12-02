const { pathSumFourWays } = require("./problem-083");
const fs = require("fs");

const matrix1 = [
    [131, 673, 234, 103, 18],
    [201, 96, 342, 965, 150],
    [630, 803, 746, 422, 111],
    [537, 699, 497, 121, 956],
    [805, 732, 524, 37, 331]
];
const matrix2 = JSON.parse(fs.readFileSync("./problem-081.test.json"));

describe("Testing problem 83: path sum four ways", () => {
    it("should return a number", () => {
        expect(typeof pathSumFourWays(matrix1)).toBe("number");
    });

    it("should return 2297 when input matrix1", () => {
        expect(pathSumFourWays(matrix1)).toBe(2297);
    });

    it("should return 425185 when input matrix2", () => {
        expect(pathSumFourWays(matrix2)).toBe(425185);
    });
});