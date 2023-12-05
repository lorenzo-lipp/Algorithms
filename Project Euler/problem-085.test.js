const { countingRectangles } = require("./problem-085");

describe("Testing problem 85: counting rectangles", () => {
    it("should return a number", () => {
        expect(typeof countingRectangles(18)).toBe("number");
    });

    it("should return 6 when input 18", () => {
        expect(countingRectangles(18)).toBe(6);
    });

    it("should return 22 when input 250", () => {
        expect(countingRectangles(250)).toBe(22);
    });

    it("should return 364 when input 50000", () => {
        expect(countingRectangles(50000)).toBe(364);
    });

    it("should return 1632 when input 1000000", () => {
        expect(countingRectangles(1000000)).toBe(1632);
    });

    it("should return 2772 when input 2000000", () => {
        expect(countingRectangles(2000000)).toBe(2772);
    });
});