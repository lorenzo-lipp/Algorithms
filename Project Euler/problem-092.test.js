const { squareDigitChains } = require("./problem-092");

describe("Testing problem 92: square digit chains", () => {
    it("should return a number", () => {
        expect(typeof squareDigitChains(100)).toBe("number");
    });

    it("should return 80 when input 100", () => {
        expect(squareDigitChains(100)).toBe(80);
    });

    it("should return 857 when input 1000", () => {
        expect(squareDigitChains(1000)).toBe(857);
    });

    it("should return 85623 when input 100000", () => {
        expect(squareDigitChains(100000)).toBe(85623);
    });

    it("should return 8581146 when input 10000000", () => {
        expect(squareDigitChains(10000000)).toBe(8581146);
    });
});