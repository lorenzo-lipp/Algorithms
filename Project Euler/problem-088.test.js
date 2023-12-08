const { productSumNumbers } = require("./problem-088");

describe("Testing problem 88: product sum numbers", () => {
    it("should return a number", () => {
        expect(typeof productSumNumbers(6)).toBe("number");
    });

    it("should return 30 when input 6", () => {
        expect(productSumNumbers(6)).toBe(30);
    });

    it("should return 61 when input 12", () => {
        expect(productSumNumbers(12)).toBe(61);
    });

    it("should return 12686 when input 300", () => {
        expect(productSumNumbers(300)).toBe(12686);
    });

    it("should return 2125990 when input 6000", () => {
        expect(productSumNumbers(6000)).toBe(2125990);
    });

    it("should return 7587457 when input 12000", () => {
        expect(productSumNumbers(12000)).toBe(7587457);
    });
});