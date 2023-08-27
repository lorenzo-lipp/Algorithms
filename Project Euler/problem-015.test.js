const { latticePaths } = require("./problem-015");

describe("Testing problem 15: lattice paths", () => {
    it("should return a number", () => {
        expect(typeof latticePaths(4)).toBe("number");
    });

    it("should return 70 when input 4", () => {
        expect(latticePaths(4)).toBe(70);
    });

    it("should return 48620 when input 9", () => {
        expect(latticePaths(9)).toBe(48620);
    });

    it("should return 137846528820 when input 20", () => {
        expect(latticePaths(20)).toBe(137846528820);
    });
})