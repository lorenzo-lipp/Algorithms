let { isKaprekar } = require("./kaprekar-numbers");

describe("Testing isKaprekar", () => {
    it("should be a function", () => {
        expect(typeof isKaprekar).toBe("function");
    });

    it("should return a boolean", () => {
        expect(typeof isKaprekar(1, 10)).toBe("boolean");
    });

    it("should return true when input n=1, base=10", () => {
        expect(isKaprekar(1, 10)).toBe(true);
    });

    it("should return true when input n=9, base=10", () => {
        expect(isKaprekar(9, 10)).toBe(true);
    });

    it("should return true when input n=2223, base=10", () => {
        expect(isKaprekar(2223, 10)).toBe(true);
    });

    it("should return false when input n=22823, base=10", () => {
        expect(isKaprekar(22823, 10)).toBe(false);
    });

    it("should return false when input n=9, base=17", () => {
        expect(isKaprekar(9, 17)).toBe(false);
    });

    it("should return true when input n=225, base=17", () => {
        expect(isKaprekar(225, 17)).toBe(true);
    });

    it("should return false when input n=999, base=17", () => {
        expect(isKaprekar(999, 17)).toBe(false);
    });
});