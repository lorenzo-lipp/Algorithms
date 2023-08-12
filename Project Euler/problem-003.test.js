const { largestPrimeFactor } = require("./problem-003");

describe("Testing problem 3: largest prime factor", () => {
    it("should return a number", () => {
        expect(typeof largestPrimeFactor(2)).toBe("number");
    });

    it("should return 2 when input 2", () => {
        expect(largestPrimeFactor(2)).toBe(2);
    });

    it("should return 3 when input 3", () => {
        expect(largestPrimeFactor(3)).toBe(3);
    });

    it("should return 5 when input 5", () => {
        expect(largestPrimeFactor(5)).toBe(5);
    });

    it("should return 7 when input 7", () => {
        expect(largestPrimeFactor(7)).toBe(7);
    });

    it("should return 2 when input 8", () => {
        expect(largestPrimeFactor(8)).toBe(2);
    });

    it("should return 29 when input 13195", () => {
        expect(largestPrimeFactor(13195)).toBe(29);
    });

    it("should return 6857 when input 600851475143", () => {
        expect(largestPrimeFactor(600851475143)).toBe(6857);
    });
})