let { getFinalOpenedDoors } = require("./100-doors");

describe("Testing 100 doors problem", () => {
    it("should return an array", () => {
        expect(Array.isArray(getFinalOpenedDoors(10))).toBe(true);
    });

    it("should return the correct result", () => {
        expect(getFinalOpenedDoors(100)).toEqual([1, 4, 9, 16, 25, 36, 49, 64, 81, 100]);
    });
})