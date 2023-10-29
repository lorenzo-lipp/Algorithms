const { combinatoricSelections } = require("./problem-053");

describe("Testing problem 53: combinatoric selections", () => {
    it("should return a number", () => {
        expect(typeof combinatoricSelections(1000)).toBe("number");
    });

    it("should return 4626 when input 1000", () => {
        expect(combinatoricSelections(1000)).toBe(4626);
    });

    it("should return 4431 when input 10000", () => {
        expect(combinatoricSelections(10000)).toBe(4431);
    });

    it("should return 4255 when input 100000", () => {
        expect(combinatoricSelections(100000)).toBe(4255);
    });

    it("should return 4075 when input 1000000", () => {
        expect(combinatoricSelections(1000000)).toBe(4075);
    });
})