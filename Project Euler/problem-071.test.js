const { orderedFractions } = require("./problem-071");

describe("Testing problem 71: ordered fractions", () => {
    it("should return a number", () => {
        expect(typeof orderedFractions(8)).toBe("number");
    });

    it("should return 2 when input 8", () => {
        expect(orderedFractions(8)).toBe(2);
    });

    it("should return 2 when input 10", () => {
        expect(orderedFractions(10)).toBe(2);
    });

    it("should return 4283 when input 9994", () => {
        expect(orderedFractions(9994)).toBe(4283);
    });

    it("should return 214283 when input 500000", () => {
        expect(orderedFractions(500000)).toBe(214283);
    });

    it("should return 428570 when input 1000000", () => {
        expect(orderedFractions(1000000)).toBe(428570);
    });
});