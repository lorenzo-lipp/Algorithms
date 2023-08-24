const { divisibleTriangleNumber } = require("./problem-012");

describe("Testing problem 12: highly divisible triangular number", () => {
    it("should return a number", () => {
        expect(typeof divisibleTriangleNumber(5)).toBe("number");
    });

    it("should return 28 when input 5", () => {
        expect(divisibleTriangleNumber(5)).toBe(28);
    });

    it("should return 630 when input 23", () => {
        expect(divisibleTriangleNumber(23)).toBe(630);
    });

    it("should return 1385280 when input 167", () => {
        expect(divisibleTriangleNumber(167)).toBe(1385280);
    });

    it("should return 17907120 when input 374", () => {
        expect(divisibleTriangleNumber(374)).toBe(17907120);
    });

    it("should return 76576500 when input 500", () => {
        expect(divisibleTriangleNumber(500)).toBe(76576500);
    });
})