const { champernownesConstant } = require("./problem-040");

describe("Testing problem 40: Champerowne's constant", () => {
    it("should return a number", () => {
        expect(typeof champernownesConstant(100)).toBe("number");
    });

    it("should return 5 when input 100", () => {
        expect(champernownesConstant(100)).toBe(5);
    });

    it("should return 15 when input 1000", () => {
        expect(champernownesConstant(1000)).toBe(15);
    });

    it("should return 210 when input 1000000", () => {
        expect(champernownesConstant(1000000)).toBe(210);
    });
})