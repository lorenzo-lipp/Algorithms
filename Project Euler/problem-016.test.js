const { powerDigitSum } = require("./problem-016");

describe("Testing problem 16: power digit sum", () => {
    it("should return a number", () => {
        expect(typeof powerDigitSum(15)).toBe("number");
    });

    it("should return 26 when input 15", () => {
        expect(powerDigitSum(15)).toBe(26);
    });

    it("should return 166 when input 128", () => {
        expect(powerDigitSum(128)).toBe(166);
    });

    it("should return 1366 when input 1000", () => {
        expect(powerDigitSum(1000)).toBe(1366);
    });
})