const { substringDivisibility } = require("./problem-043");

describe("Testing problem 43: substring divisibility", () => {
    it("should return a number", () => {
        expect(typeof substringDivisibility(5)).toBe("number");
    });

    it("should return 12444480 when input 5", () => {
        expect(substringDivisibility(5)).toBe(12444480);
    });

    it("should return 1099210170 when input 7", () => {
        expect(substringDivisibility(7)).toBe(1099210170);
    });

    it("should return 1113342912 when input 8", () => {
        expect(substringDivisibility(8)).toBe(1113342912);
    });

    it("should return 16695334890 when input 9", () => {
        expect(substringDivisibility(9)).toBe(16695334890);
    });
})