const { doubleBasePalindromes } = require("./problem-036");

describe("Testing problem 36: double-base palindromes", () => {
    it("should return a number", () => {
        expect(typeof doubleBasePalindromes(1000)).toBe("number");
    });

    it("should return 1772 when input 1000", () => {
        expect(doubleBasePalindromes(1000)).toBe(1772);
    });

    it("should return 105795 when input 50000", () => {
        expect(doubleBasePalindromes(50000)).toBe(105795);
    });

    it("should return 286602 when input 500000", () => {
        expect(doubleBasePalindromes(500000)).toBe(286602);
    });

    it("should return 872187 when input 1000000", () => {
        expect(doubleBasePalindromes(1000000)).toBe(872187);
    });
})