const { amicableChains } = require("./problem-095");

describe("Testing problem 95: amicable chains", () => {
    it("should return a number", () => {
        expect(typeof amicableChains(300)).toBe("number");
    });

    it("should return 220 when input 300", () => {
        expect(amicableChains(300)).toBe(220);
    });

    it("should return 220 when input 15000", () => {
        expect(amicableChains(15000)).toBe(220);
    });

    it("should return 12496 when input 100000", () => {
        expect(amicableChains(100000)).toBe(12496);
    });

    it("should return 14316 when input 1000000", () => {
        expect(amicableChains(1000000)).toBe(14316);
    });
});