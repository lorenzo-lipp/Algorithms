const { totientMaximum } = require("./problem-069");

describe("Testing problem 69: totient maximum", () => {
    it("should return a number", () => {
        expect(typeof totientMaximum(10)).toBe("number");
    });

    it("should return 6 when input 10", () => {
        expect(totientMaximum(10)).toBe(6);
    });

    it("should return 2310 when input 10000", () => {
        expect(totientMaximum(10000)).toBe(2310);
    });

    it("should return 30030 when input 500000", () => {
        expect(totientMaximum(500000)).toBe(30030);
    });

    it("should return 510510 when input 1000000", () => {
        expect(totientMaximum(1000000)).toBe(510510);
    });
});