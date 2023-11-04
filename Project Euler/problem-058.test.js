const { spiralPrimes } = require("./problem-058");

describe("Testing problem 58: spiral primes", () => {
    it("should return a number", () => {
        expect(typeof spiralPrimes(50)).toBe("number");
    });

    it("should return 11 when input 50", () => {
        expect(spiralPrimes(50)).toBe(11);
    });

    it("should return 981 when input 15", () => {
        expect(spiralPrimes(15)).toBe(981);
    });

    it("should return 26241 when input 10", () => {
        expect(spiralPrimes(10)).toBe(26241);
    });
});
