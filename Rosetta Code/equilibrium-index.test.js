let { equilibrium } = require("./equilibrium-index");

describe("Testing equilibrium", () => {
    it("should be a function", () => {
        expect(typeof equilibrium).toBe("function");
    });

    it("should return [3,6] to the input [-7, 1, 5, 2, -4, 3, 0]", () => {
        expect(equilibrium([-7, 1, 5, 2, -4, 3, 0])).toStrictEqual([3,6]);
    });

    it("should return [] to the input [2, 4, 6]", () => {
        expect(equilibrium([2, 4, 6])).toStrictEqual([]);
    });

    it("should return [1] to the input [2, 9, 2]", () => {
        expect(equilibrium([2, 9, 2])).toStrictEqual([1]);
    });

    it("should return [0,1,2,3,4,5,6] to the input [1, -1, 1, -1, 1, -1, 1]", () => {
        expect(equilibrium([1, -1, 1, -1, 1, -1, 1])).toStrictEqual([0,1,2,3,4,5,6]);
    });

    it("should return [0] to the input [1]", () => {
        expect(equilibrium([1])).toStrictEqual([0]);
    });

    it("should return [] to the input []", () => {
        expect(equilibrium([])).toStrictEqual([]);
    });
});