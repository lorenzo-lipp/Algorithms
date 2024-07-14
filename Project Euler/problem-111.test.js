const { primesWithRuns } = require("./problem-111");
  

describe("Testing problem 111: primes with runs", () => {
    it("should return a number", () => {
        expect(typeof primesWithRuns(4)).toBe("number");
    });

    it("should return 273700 when input 4", () => {
        expect(primesWithRuns(4)).toBe(273700);
    });

    it("should return 612407567715 when input 10", () => {
        expect(primesWithRuns(10)).toBe(612407567715);
    });
});