const { digitFactorialChains } = require("./problem-074");

describe("Testing problem 74: digit factorial chains", () => {
    it("should return a number", () => {
        expect(typeof digitFactorialChains(2000)).toBe("number");
    });

    it("should return 6 when input 2000", () => {
        expect(digitFactorialChains(2000)).toBe(6);
    });

    it("should return 42 when input 100000", () => {
        expect(digitFactorialChains(100000)).toBe(42);
    });

    it("should return 282 when input 500000", () => {
        expect(digitFactorialChains(500000)).toBe(282);
    });

    it("should return 402 when input 1000000", () => {
        expect(digitFactorialChains(1000000)).toBe(402);
    });
});