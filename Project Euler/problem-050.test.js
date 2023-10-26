const { consecutivePrimeSum } = require("./problem-050");

describe("Testing problem 50: consecutive prime sum", () => {
    it("should return a number", () => {
        expect(typeof consecutivePrimeSum(1000)).toBe("number");
    });

    it("should return 953 when input 1000", () => {
        expect(consecutivePrimeSum(1000)).toBe(953);
    });

    it("should return 997651 when input 1000000", () => {
        expect(consecutivePrimeSum(1000000)).toBe(997651);
    });
})