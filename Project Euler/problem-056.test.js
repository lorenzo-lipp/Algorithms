const { powerfulDigitSum } = require("./problem-056");

describe("Testing problem 56: powerful digit sum", () => {
    it("should return a number", () => {
        expect(typeof powerfulDigitSum(3)).toBe("number");
    });

    it("should return 4 when input 3", () => {
        expect(powerfulDigitSum(3)).toBe(4);
    });

    it("should return 45 when input 10", () => {
        expect(powerfulDigitSum(10)).toBe(45);
    });

    it("should return 406 when input 50", () => {
        expect(powerfulDigitSum(50)).toBe(406);
    });

    it("should return 684 when input 75", () => {
        expect(powerfulDigitSum(75)).toBe(684);
    });

    it("should return 972 when input 100", () => {
        expect(powerfulDigitSum(100)).toBe(972);
    });
});