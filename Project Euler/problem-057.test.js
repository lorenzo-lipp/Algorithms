const { squareRootConvergents } = require("./problem-057");

describe("Testing problem 57: square root convergents", () => {
    it("should return a number", () => {
        expect(typeof squareRootConvergents(10)).toBe("number");
    });

    it("should return 1 when input 10", () => {
        expect(squareRootConvergents(10)).toBe(1);
    });

    it("should return 15 when input 100", () => {
        expect(squareRootConvergents(100)).toBe(15);
    });

    it("should return 153 when input 1000", () => {
        expect(squareRootConvergents(1000)).toBe(153);
    });
});