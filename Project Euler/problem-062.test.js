const { cubicPermutations } = require("./problem-062");

describe("Testing problem 62: cubic permutations", () => {
    it("should return a number", () => {
        expect(typeof cubicPermutations(2)).toBe("number");
    });

    it("should return 125 when input 2", () => {
        expect(cubicPermutations(2)).toBe(125);
    });

    it("should return 41063625 when input 3", () => {
        expect(cubicPermutations(3)).toBe(41063625);
    });

    it("should return 1006012008 when input 4", () => {
        expect(cubicPermutations(4)).toBe(1006012008);
    });

    it("should return 127035954683 when input 5", () => {
        expect(cubicPermutations(5)).toBe(127035954683);
    });
});