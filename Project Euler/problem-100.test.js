const { arrangedProbability } = require("./problem-100");

describe("Testing problem 100: arranged probability", () => {
    it("should return a number", () => {
        expect(typeof arrangedProbability(20)).toBe("number");
    });

    it("should return 15 when input 20", () => {
        expect(arrangedProbability(20)).toBe(15);
    });

    it("should return 85 when input 100", () => {
        expect(arrangedProbability(100)).toBe(85);
    });

    it("should return 97513 when input 100000", () => {
        expect(arrangedProbability(100000)).toBe(97513);
    });

    it("should return 655869061 when input 1000000000", () => {
        expect(arrangedProbability(1000000000)).toBe(655869061);
    });

    it("should return 756872327473 when input 1000000000000", () => {
        expect(arrangedProbability(1000000000000)).toBe(756872327473);
    });
});