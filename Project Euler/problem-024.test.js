const { lexicographicPermutations } = require("./problem-024");

describe("Testing problem 24: lexicographic permutations", () => {
    it("should return a number", () => {
        expect(typeof lexicographicPermutations(699999)).toBe("number");
    });

    it("should return 1938246570 when input 699999", () => {
        expect(lexicographicPermutations(699999)).toBe(1938246570);
    });

    it("should return 2536987410 when input 899999", () => {
        expect(lexicographicPermutations(899999)).toBe(2536987410);
    });

    it("should return 2537014689 when input 900000", () => {
        expect(lexicographicPermutations(900000)).toBe(2537014689);
    });

    it("should return 2783915460 when input 999999", () => {
        expect(lexicographicPermutations(999999)).toBe(2783915460);
    });

    it("should return 9876543210 when input 3628799", () => {
        expect(lexicographicPermutations(3628799)).toBe(9876543210);
    });
})