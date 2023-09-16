const { namesScores } = require("./problem-022");
const fs = require("fs");

const test1 = ['THIS', 'IS', 'ONLY', 'A', 'TEST'];
const test2 = ['I', 'REPEAT', 'THIS', 'IS', 'ONLY', 'A', 'TEST'];
const names = JSON.parse(fs.readFileSync("./problem-022.test.json"));

describe("Testing problem 22: names scores", () => {
    it("should return a number", () => {
        expect(typeof namesScores(test1)).toBe("number");
    });

    it("should return 791 when input test1", () => {
        expect(namesScores(test1)).toBe(791);
    });

    it("should return 1468 when input test2", () => {
        expect(namesScores(test2)).toBe(1468);
    });

    it("should return 871198282 when input names file", () => {
        expect(namesScores(names)).toBe(871198282);
    });
})