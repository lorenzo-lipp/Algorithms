const { pandigitalProducts } = require("./problem-032");

describe("Testing problem 32: pandigital products", () => {
    it("should return a number", () => {
        expect(typeof pandigitalProducts(4)).toBe("number");
    });

    it("should return 12 when input 4", () => {
        expect(pandigitalProducts(4)).toBe(12);
    });

    it("should return 162 when input 6", () => {
        expect(pandigitalProducts(6)).toBe(162);
    });

    it("should return 0 when input 7", () => {
        expect(pandigitalProducts(7)).toBe(0);
    });

    it("should return 13458 when input 8", () => {
        expect(pandigitalProducts(8)).toBe(13458);
    });

    it("should return 45228 when input 9", () => {
        expect(pandigitalProducts(9)).toBe(45228);
    });
})