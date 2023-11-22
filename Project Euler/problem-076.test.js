const { countingSummations } = require("./problem-076");

describe("Testing problem 76: counting summations", () => {
    it("should return a number", () => {
        expect(typeof countingSummations(5)).toBe("number");
    });

    it("should return 6 when input 5", () => {
        expect(countingSummations(5)).toBe(6);
    });

    it("should return 626 when input 20", () => {
        expect(countingSummations(20)).toBe(626);
    });

    it("should return 204225 when input 50", () => {
        expect(countingSummations(50)).toBe(204225);
    });

    it("should return 190569291 when input 100", () => {
        expect(countingSummations(100)).toBe(190569291);
    });
});