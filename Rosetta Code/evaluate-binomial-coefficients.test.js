let { binom } = require("./evaluate-binomial-coefficients");

describe("Testing binom", () => {
    it("should be a function", () => {
        expect(typeof binom).toBe("function");
    });

    it("should return 10 to n=5 and k=3", () => {
        expect(binom(5, 3)).toBe(10);
    });

    it("should return 21 to n=7 and k=2", () => {
        expect(binom(7, 2)).toBe(21);
    });

    it("should return 210 to n=10 and k=4", () => {
        expect(binom(10, 4)).toBe(210);
    });

    it("should return 6 to n=6 and k=1", () => {
        expect(binom(6, 1)).toBe(6);
    });

    it("should return 495 to n=12 and k=8", () => {
        expect(binom(12, 8)).toBe(495);
    });
});