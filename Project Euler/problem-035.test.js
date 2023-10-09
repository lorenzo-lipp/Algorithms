const { circularPrimes } = require("./problem-035");

describe("Testing problem 35: circular primes", () => {
    it("should return a number", () => {
        expect(typeof circularPrimes(100)).toBe("number");
    });

    it("should return 13 when input 100", () => {
        expect(circularPrimes(100)).toBe(13);
    });

    it("should return 43 when input 100000", () => {
        expect(circularPrimes(100000)).toBe(43);
    });

    it("should return 45 when input 250000", () => {
        expect(circularPrimes(250000)).toBe(45);
    });

    it("should return 49 when input 500000", () => {
        expect(circularPrimes(500000)).toBe(49);
    });

    it("should return 49 when input 750000", () => {
        expect(circularPrimes(750000)).toBe(49);
    });

    it("should return 55 when input 1000000", () => {
        expect(circularPrimes(1000000)).toBe(55);
    });
})