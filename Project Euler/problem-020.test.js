const { sumFactorialDigits } = require("./problem-020");

describe("Testing problem 20: factorial digit sum", () => {
    it("should return a number", () => {
        expect(typeof sumFactorialDigits(10)).toBe("number");
    });

    it("should return 27 when input 10", () => {
        expect(sumFactorialDigits(10)).toBe(27);
    });

    it("should return 72 when input 25", () => {
        expect(sumFactorialDigits(25)).toBe(72);
    });

    it("should return 216 when input 50", () => {
        expect(sumFactorialDigits(50)).toBe(216);
    });

    it("should return 432 when input 75", () => {
        expect(sumFactorialDigits(75)).toBe(432);
    });

    it("should return 648 when input 100", () => {
        expect(sumFactorialDigits(100)).toBe(648);
    });
})