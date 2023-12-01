const { pathSumThreeWays } = require("./problem-082");
const fs = require("fs");

const matrix1 = [
    [131, 673, 234, 103, 18],
    [201, 96, 342, 965, 150],
    [630, 803, 746, 422, 111],
    [537, 699, 497, 121, 956],
    [805, 732, 524, 37, 331]
];
const matrix2 = JSON.parse(fs.readFileSync("./problem-081.test.json"));

describe("Testing problem 82: path sum three ways", () => {
    it("should return a number", () => {
        expect(typeof pathSumThreeWays(matrix1)).toBe("number");
    });

    it("should return 994 when input matrix1", () => {
        expect(pathSumThreeWays(matrix1)).toBe(994);
    });

    it("should return 260324 when input matrix2", () => {
        expect(pathSumThreeWays(matrix2)).toBe(260324);
    });
});