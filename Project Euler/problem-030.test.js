const { digitnPowers } = require("./problem-030");

describe("Testing problem 30: digit n powers", () => {
    it("should return a number", () => {
        expect(typeof digitnPowers(2)).toBe("number");
    });

    it("should return 0 when input 2", () => {
        expect(digitnPowers(2)).toBe(0);
    });

    it("should return 1301 when input 3", () => {
        expect(digitnPowers(3)).toBe(1301);
    });

    it("should return 19316 when input 4", () => {
        expect(digitnPowers(4)).toBe(19316);
    });

    it("should return 443839 when input 5", () => {
        expect(digitnPowers(5)).toBe(443839);
    });
})