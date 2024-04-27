let { sumSquares } = require("./sum-of-squares");

describe("Testing sumSquares", () => {
    it("should be a function", () => {
        expect(typeof sumSquares).toBe("function");
    });

    it("should return a number", () => {
        expect(typeof sumSquares([1, 2, 3, 4, 5])).toBe("number");
    });

    it("should return 55 when input [1, 2, 3, 4, 5]", () => {
        expect(sumSquares([1, 2, 3, 4, 5])).toBe(55);
    });

    it("should return 2242 when input [25, 32, 12, 7, 20]", () => {
        expect(sumSquares([25, 32, 12, 7, 20])).toBe(2242);
    });

    it("should return 4927 when input [38, 45, 35, 8, 13]", () => {
        expect(sumSquares([38, 45, 35, 8, 13])).toBe(4927);
    });

    it("should return 5277 when input [43, 36, 20, 34, 24]", () => {
        expect(sumSquares([43, 36, 20, 34, 24])).toBe(5277);
    });

    it("should return 2499 when input [12, 33, 26, 18, 1, 16, 3]", () => {
        expect(sumSquares([12, 33, 26, 18, 1, 16, 3])).toBe(2499);
    });
});