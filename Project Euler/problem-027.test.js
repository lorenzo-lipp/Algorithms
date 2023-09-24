const { quadraticPrimes } = require("./problem-027");

describe("Testing problem 27: quadratic primes", () => {
    it("should return a number", () => {
        expect(typeof quadraticPrimes(200)).toBe("number");
    });

    it("should return -4925 when input 200", () => {
        expect(quadraticPrimes(200)).toBe(-4925);
    });

    it("should return -18901 when input 500", () => {
        expect(quadraticPrimes(500)).toBe(-18901);
    });

    it("should return -43835 when input 800", () => {
        expect(quadraticPrimes(800)).toBe(-43835);
    });

    it("should return -59231 when input 1000", () => {
        expect(quadraticPrimes(1000)).toBe(-59231);
    });
})