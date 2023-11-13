const { maximumPathSumII } = require("./problem-067");
const fs = require("fs");

const testTriangle = [[3, 0, 0, 0],[7, 4, 0, 0],[2, 4, 6, 0],[8, 5, 9, 3]];
const fullTriangle = JSON.parse(fs.readFileSync("./problem-067.test.json"));

describe("Testing problem 67: maximum path sum ii", () => {
    it("should return a number", () => {
        expect(typeof maximumPathSumII(testTriangle)).toBe("number");
    });

    it("should return 23 when input testTriangle", () => {
        expect(maximumPathSumII(testTriangle)).toBe(23);
    });

    it("should return 7273 when input fullTriangle", () => {
        expect(maximumPathSumII(fullTriangle)).toBe(7273);
    });
});