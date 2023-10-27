const { primeDigitReplacements } = require("./problem-051");

describe("Testing problem 51: prime digit replacements", () => {
    it("should return a number", () => {
        expect(typeof primeDigitReplacements(6)).toBe("number");
    });

    it("should return 13 when input 6", () => {
        expect(primeDigitReplacements(6)).toBe(13);
    });

    it("should return 56003 when input 7", () => {
        expect(primeDigitReplacements(7)).toBe(56003);
    });

    it("should return 121313 when input 8", () => {
        expect(primeDigitReplacements(8)).toBe(121313);
    });
})