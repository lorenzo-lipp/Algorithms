const { truncatablePrimes } = require("./problem-037");

describe("Testing problem 37: truncatable primes", () => {
    it("should return a number", () => {
        expect(typeof truncatablePrimes(8)).toBe("number");
    });

    it("should return 1986 when input 8", () => {
        expect(truncatablePrimes(8)).toBe(1986);
    });

    it("should return 5123 when input 9", () => {
        expect(truncatablePrimes(9)).toBe(5123);
    });

    it("should return 8920 when input 10", () => {
        expect(truncatablePrimes(10)).toBe(8920);
    });

    it("should return 748317 when input 11", () => {
        expect(truncatablePrimes(11)).toBe(748317);
    });
})