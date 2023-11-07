const { cyclicalFigurateNums } = require("./problem-061");

describe("Testing problem 61: cyclical figurate nums", () => {
    it("should return a number", () => {
        expect(typeof cyclicalFigurateNums(3)).toBe("number");
    });

    it("should return 19291 when input 3", () => {
        expect(cyclicalFigurateNums(3)).toBe(19291);
    });

    it("should return 28684 when input 4", () => {
        expect(cyclicalFigurateNums(4)).toBe(28684);
    });

    it("should return 76255 when input 5", () => {
        expect(cyclicalFigurateNums(5)).toBe(76255);
    });

    it("should return 28684 when input 6", () => {
        expect(cyclicalFigurateNums(6)).toBe(28684);
    });
});