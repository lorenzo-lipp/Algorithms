const { reciprocalCycles } = require("./problem-026");

describe("Testing problem 26: reciprocal cycles", () => {
    it("should return a number", () => {
        expect(typeof reciprocalCycles(700)).toBe("number");
    });

    it("should return 659 when input 700", () => {
        expect(reciprocalCycles(700)).toBe(659);
    });

    it("should return 743 when input 800", () => {
        expect(reciprocalCycles(800)).toBe(743);
    });

    it("should return 887 when input 900", () => {
        expect(reciprocalCycles(900)).toBe(887);
    });

    it("should return 983 when input 1000", () => {
        expect(reciprocalCycles(1000)).toBe(983);
    });
})