const { distinctPrimeFactors } = require("./problem-047");

describe("Testing problem 47: distinct prime factors", () => {
    it("should return a number", () => {
        expect(typeof distinctPrimeFactors(2, 2)).toBe("number");
    });

    it("should return 14 when both inputs are 2", () => {
        expect(distinctPrimeFactors(2, 2)).toBe(14);
    });

    it("should return 644 when both inputs are 3", () => {
        expect(distinctPrimeFactors(3, 3)).toBe(644);
    });

    it("should return 134043 when both inputs are 4", () => {
        expect(distinctPrimeFactors(4, 4)).toBe(134043);
    });
})
