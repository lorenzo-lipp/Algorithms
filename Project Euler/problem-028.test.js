const { spiralDiagonals } = require("./problem-028");

describe("Testing problem 28: number spiral diagonals", () => {
    it("should return a number", () => {
        expect(typeof spiralDiagonals(5)).toBe("number");
    });

    it("should return 101 when input 5", () => {
        expect(spiralDiagonals(5)).toBe(101);
    });

    it("should return 692101 when input 101", () => {
        expect(spiralDiagonals(101)).toBe(692101);
    });

    it("should return 18591725 when input 303", () => {
        expect(spiralDiagonals(303)).toBe(18591725);
    });

    it("should return 85986601 when input 505", () => {
        expect(spiralDiagonals(505)).toBe(85986601);
    });

    it("should return 669171001 when input 1001", () => {
        expect(spiralDiagonals(1001)).toBe(669171001);
    });
})