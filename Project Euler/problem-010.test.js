const { primeSummation } = require("./problem-010");

describe("Testing problem 10: summation of primes", () => {
    it("should return a number", () => {
        expect(typeof primeSummation(17)).toBe("number");
    });

    it("should return 41 when input 17", () => {
        expect(primeSummation(17)).toBe(41);
    });

    it("should return 277050 when input 2001", () => {
        expect(primeSummation(2001)).toBe(277050);
    });

    it("should return 873608362 when input 140759", () => {
        expect(primeSummation(140759)).toBe(873608362);
    });

    it("should return 142913828922 when input 2000000", () => {
        expect(primeSummation(2000000)).toBe(142913828922);
    });
})