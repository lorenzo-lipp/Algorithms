const { countingFractionsInARange } = require("./problem-073");

describe("Testing problem 73: counting fractions in range", () => {
    it("should return a number", () => {
        expect(typeof countingFractionsInARange(8)).toBe("number");
    });

    it("should return 3 when input 8", () => {
        expect(countingFractionsInARange(8)).toBe(3);
    });

    it("should return 50695 when input 1000", () => {
        expect(countingFractionsInARange(1000)).toBe(50695);
    });

    it("should return 1823861 when input 6000", () => {
        expect(countingFractionsInARange(6000)).toBe(1823861);
    });

    it("should return 7295372 when input 12000", () => {
        expect(countingFractionsInARange(12000)).toBe(7295372);
    });
});