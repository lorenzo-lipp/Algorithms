const { countCoins } = require("./count-coins");

describe("Testing count coins problem", () => {
    it("should be a function", () => {
        expect(typeof countCoins).toBe("function");
    });

    it("should return 6 when input 15", () => {
        expect(countCoins(15)).toBe(6);
    });

    it("should return 163 when input 85", () => {
        expect(countCoins(85)).toBe(163);
    });

    it("should return 242 when input 100", () => {
        expect(countCoins(100)).toBe(242);
    })
})