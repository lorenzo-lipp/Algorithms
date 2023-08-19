const { largestProductinaSeries } = require("./problem-008");

describe("Testing problem 8: largest product in a series", () => {
    it("should return a number", () => {
        expect(typeof largestProductinaSeries(4)).toBe("number");
    });

    it("should return 5832 when input 4", () => {
        expect(largestProductinaSeries(4)).toBe(5832);
    });

    it("should return 23514624000 when input 13", () => {
        expect(largestProductinaSeries(13)).toBe(23514624000);
    });
})