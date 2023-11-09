const { powerfulDigitCounts } = require("./problem-063");

describe("Testing problem 63: powerful digit counts", () => {
    it("should return a number", () => {
        expect(typeof powerfulDigitCounts(1)).toBe("number");
    });

    it("should return 9 when input 1", () => {
        expect(powerfulDigitCounts(1)).toBe(9);
    });

    it("should return 6 when input 2", () => {
        expect(powerfulDigitCounts(2)).toBe(6);
    });

    it("should return 5 when input 3", () => {
        expect(powerfulDigitCounts(3)).toBe(5);
    });

    it("should return 4 when input 4", () => {
        expect(powerfulDigitCounts(4)).toBe(4);
    });

    it("should return 3 when input 5", () => {
        expect(powerfulDigitCounts(5)).toBe(3);
    });

    it("should return 3 when input 6", () => {
        expect(powerfulDigitCounts(6)).toBe(3);
    });

    it("should return 2 when input 7", () => {
        expect(powerfulDigitCounts(7)).toBe(2);
    });

    it("should return 2 when input 8", () => {
        expect(powerfulDigitCounts(8)).toBe(2);
    });

    it("should return 2 when input 10", () => {
        expect(powerfulDigitCounts(10)).toBe(2);
    });

    it("should return 1 when input 21", () => {
        expect(powerfulDigitCounts(21)).toBe(1);
    });
});