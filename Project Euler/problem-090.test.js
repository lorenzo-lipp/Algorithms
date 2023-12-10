const { cubeDigitPairs } = require("./problem-090");

describe("Testing problem 90: cube digit pairs", () => {
    it("should return a number", () => {
        expect(typeof cubeDigitPairs()).toBe("number");
    });

    it("should return 1217", () => {
        expect(cubeDigitPairs()).toBe(1217);
    });
});