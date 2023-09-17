const { sumOfNonAbundantNumbers } = require("./problem-023");

describe("Testing problem 23: non-abundant sums", () => {
    it("should return a number", () => {
        expect(typeof sumOfNonAbundantNumbers(10000)).toBe("number");
    });

    it("should return 3731004 when input 10000", () => {
        expect(sumOfNonAbundantNumbers(10000)).toBe(3731004);
    });

    it("should return 4039939 when input 15000", () => {
        expect(sumOfNonAbundantNumbers(15000)).toBe(4039939);
    });

    it("should return 4159710 when input 20000", () => {
        expect(sumOfNonAbundantNumbers(20000)).toBe(4159710);
    });

    it("should return 4179871 when input 28123", () => {
        expect(sumOfNonAbundantNumbers(28123)).toBe(4179871);
    });
})