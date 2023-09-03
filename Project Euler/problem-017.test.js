const { numberLetterCounts } = require("./problem-017");

describe("Testing problem 17: number letter counts", () => {
    it("should return a number", () => {
        expect(typeof numberLetterCounts(5)).toBe("number");
    });

    it("should return 19 when input 5", () => {
        expect(numberLetterCounts(5)).toBe(19);
    });

    it("should return 1903 when input 150", () => {
        expect(numberLetterCounts(150)).toBe(1903);
    });

    it("should return 21124 when input 1000", () => {
        expect(numberLetterCounts(1000)).toBe(21124);
    });
})